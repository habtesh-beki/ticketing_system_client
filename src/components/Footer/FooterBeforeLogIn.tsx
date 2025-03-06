import { Link } from "react-router";
import { Button } from "../ui/button";
export default function Footer() {
  return (
    <div className="flex w-full h-1/6 bg-[#5046E6] justify-between px-40 items-center mt-20">
      <div className="flex gap-4 text-white font-bold text-2xl items-center">
        <h1 className=" ">
          Ready to get started? <br /> Create your account today.
        </h1>
      </div>

      <div className="flex gap-2">
        <Link to="/signup">
          <Button className="bg-[#4338CA] hover:bg-blue-900 text-xl text-white cursor-pointer">
            Get Started
          </Button>
        </Link>

        <Link to="/login">
          <Button className="bg-white text-xl hover:bg-gray-300 text-blue-500  cursor-pointer">
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}
