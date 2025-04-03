import { User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [enterData, setEnterData] = useState("");
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const loginUser = await axios.post(
        "http://127.0.0.1:3000/api/v1/login",
        data
      );
      const token = loginUser.data.token;
      localStorage.setItem("auth-token", token);
      setEnterData("data enter successfully");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center w-full flex-grow">
      <div className="w-1/2 flex flex-col items-center gap-3">
        <User size={48} className="text-[#4338CA]" />
        <h3 className="font-bold text-4xl">Well Come Back!</h3>
        <h4>
          or{" "}
          <Link to="/signup">
            <span className="text-[#4338CA] cursor-pointer">
              create new account
            </span>
          </Link>
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-1/2 mt-5 border p-8 rounded-md"
        >
          <div>
            <label className="font-bold mb-2" id="email">
              Email
            </label>
            <Input
              aria-labelledby="email"
              className="h-12"
              {...register("email")}
            />
          </div>
          <div>
            <label className="font-bold mb-2" id="password">
              Password
            </label>
            <Input
              aria-labelledby="password"
              type="password"
              className="h-12"
              {...register("password")}
            />
          </div>
          {enterData && <p>{enterData}</p>}
          <Button
            type="submit"
            className="bg-[#4338CA] text-white text-xl mt-3"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
