import { UserPlus } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Link } from "react-router";

type Inputs = {
  first_name: string;
  last_name: string;
  password: string;
  role: string;
};

export default function SignupForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const loginUser = await axios.post(
        "http://127.0.0.1:3000/api/v1/signup",
        data
      );
      const token = loginUser.data.token;
      localStorage.setItem("auth-token", token);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center w-full flex-grow">
      <div className="w-1/2 flex flex-col items-center gap-3">
        <UserPlus size={48} className="text-[#4338CA]" />
        <h3 className="font-bold text-4xl">Create a new account</h3>
        <h4>
          or{" "}
          <Link to="/login">
            <span className="text-[#4338CA] cursor-pointer">
              signin to your existing account
            </span>
          </Link>
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-1/2 mt-5 border p-8 rounded-md"
        >
          <div>
            <label id="first-name" className="font-bold mb-2">
              First name
            </label>
            <Input
              aria-labelledby="first-name"
              className="h-12"
              {...register("first_name", { required: true })}
            />
          </div>
          <div>
            <label id="last-name" className="font-bold mb-2">
              Last Name
            </label>
            <Input aria-labelledby="last-name" className="h-12" />
          </div>
          <div>
            <label id="email" className="font-bold mb-2">
              Email
            </label>
            <Input
              aria-labelledby="email"
              className="h-12"
              {...register("last_name", { required: true })}
            />
          </div>
          <div>
            <label id="password" className="font-bold mb-2">
              Password
            </label>
            <Input
              aria-labelledby="password"
              className="h-12"
              {...register("password", { required: true })}
            />
          </div>
          <div>
            <label>Role</label>
            <Select onValueChange={(value) => setValue("role", value)}>
              <SelectTrigger
                role="role"
                {...register("role", { required: true })}
                className="focus:ring-blue-600 w-full"
              ></SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">admin</SelectItem>
                <SelectItem value="user">user</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="bg-[#4338CA] text-white text-xl mt-3"
          >
            Create account
          </Button>
        </form>
      </div>
    </div>
  );
}
