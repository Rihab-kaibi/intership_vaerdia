import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import axiosClient from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/ClientContext";
import { HOME_ROUTE2 } from "../../router";

const formSchema = z.object({
  name: z.string().min(5).max(30),
  role: z.string().min(5).max(30),
  email: z.string().email().min(2).max(50),
  telephone: z.string().min(5).max(30),

  password: z.string().min(8).max(30),
 });

export default function SignupClient() {
  const formMethods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "adem2",
      role: "Admin",
      email: "adem2@gmail.com",
      telephone: "21212121",
      password: "00000000",
    },
  });

  const { handleSubmit, control } = formMethods;
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();
  const { setUser, setAuthenticated } = useUserContext();

  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit = async (values) => {
    try {
      var data = await axiosClient.post('/api/register', values);

      console.log("token data", data);
      localStorage.setItem('token', data.token);
      axiosClient.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

      setUser(data.user);
      setAuthenticated(true);

      navigate(HOME_ROUTE2);
    } catch (error) {
      console.error('Login failed:', error);
    }

  };

  return (
    <Form {...formMethods}>
      <div className="flex justify-center mt-10  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 max-w-md w-full"
        >
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your role" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      <FormField
            control={control}
            name="telephone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
                <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirme Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                
                
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className={""} disabled={isSubmitting} type="submit">
            {isSubmitting && <Loader className={"mx-2 my-2 animate-spin"} />}
            {"Register "}
          </Button>
        </form>
      </div>
    </Form>
  );
}
