<?php
namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $users = User::query()->get();
        return response()->json([
            'results' => $users
        ], 200);

    }
    public function store(Request $request): JsonResponse
    {
            $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'role' => ['required', 'string', 'max:255'],
                'telephone' => ['integer'],
                'password' => ['required','unique:users'],
            ]);

            $user = User::query()->create([
                'name' => $request->name,
                'email' => $request->email,
                'role' => $request->role,
                'telephone' => $request->telephone,
                'password' => Hash::make($request->password),
            ]);

            event(new Registered($user));

            return response()->json([
                'message' => 'User successfully created!'
            ], 200);
    }


    public function show($id)
    {
        $users = User::find($id);
        if (!$users) {
            return response()->json([
                'message' => 'user not found.'
            ], 404);
        }
        return response()->json([
            'users' => $users
        ], 200);
    }
    public function register(UserStoreRequest $request)
    {

    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }
       if (auth()->attempt($request->only('email', 'password'))) {
          $user = auth()->user();
           $token = $user->createToken('AuthToken')->plainTextToken;
           return response()->json(['token' => $token], 200);
       }

        return response()->json(['error' => 'Unauthorized'], 401);
    }
    public function update(UserUpdateRequest $request, $id)
    {
        $attributes = $request->validate([
            'name' => 'required|max:25',
            'email' => 'required|email',
            'role' => 'required',
            'telephone' => 'nullable',
        ]);
        $user = User::query()->find($id);
        if (!$user) {
            return response()->json([
                'message' => 'User not found.'
            ], 404);
        }
        $user->update($attributes);
        return response()->json([
            'message' => 'User updated successfully.'
        ], 200);

    }

    public function destroy($id)
    {
        $user = User::query()->findOrFail($id);
        $user->delete();

        return response()->json([
            'message' => 'User deleted successfully.'
        ], 200);
    }
}
