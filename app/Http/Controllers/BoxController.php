<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Box;
use App\Models\Category;

class BoxController extends Controller
{
    public function index()
    {
        // Fetch all boxes
        /*Cette méthode est utilisée pour récupérer toutes les Box dans la base de données.
Box::all(); :  utilise le modèle Box pour récupérer toutes les entrées de la table boxes.
return response()->json($boxes); : La réponse est renvoyée sous forme de JSON. */

        $boxes = Box::all();
        return response()->json($boxes);
    }

    public function getBoxesByCategory($categoryId)
    {

        /*  permet de récupérer toutes les Box qui appartiennent à une catégorie spécifique.
        Paramètre : $categoryId est l'identifiant de la catégorie pour laquelle on souhaite récupérer les boxes.
        Box::where('category_id', $categoryId)->get(); : Cette requête filtre les boxes dont la colonne category_id correspond à l'ID de la catégorie fournie. */
        \Log::info('Fetching boxes for category ID: ' . $categoryId);
        try {
            // Fetch boxes based on category ID
            $boxes = Box::where('category_id', $categoryId)->get();
            \Log::info('Fetched boxes: ' . $boxes->toJson());
            return response()->json($boxes);
        } catch (\Exception $e) {
            \Log::error('Failed to fetch boxes: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to fetch data'], 500);
        }
    }



    public function getCategories()
    {
        /*  récupère toutes les catégories disponibles.
    Category::all(); : Utilise le modèle Category pour récupérer toutes les entrées de la table categories.
    En cas de succès, elle renvoie les catégories en format JSON. Si une erreur survient, un message d'erreur est renvoyé avec un statut HTTP 500. */
        try {
            // Fetch all categories
            $categories = Category::all();
            return response()->json($categories);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch data'], 500);
        }
    }

 }
