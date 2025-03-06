import { Link } from "react-router";
import { Button } from "../ui/button";

export default function HeaderSecondary() {
  return (
    <div className="w-full h-2/5 flex flex-col bg-[#4338CA] px-40 justify-center gap-4 text-white">
      <h1 className="text-6xl font-extrabold">Support Ticketing System </h1>
      <p className="font-bold">
        A simple and efficient way to manage support requests. Create tickets,
        track progress,
        <br />
        and get the help you need.
      </p>
      <div className="flex gap-2 ">
        <Link to="/signup">
          <Button className="bg-white  text-bold text-[#4338CA] hover:bg-gray-300">
            Get Started
          </Button>
        </Link>

        <Link to="/login">
          <Button className="bg-inherit hover:bg-blue-600 border text-white border-white text-bold">
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}
