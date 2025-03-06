import { TicketPlus } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";
export default function Header() {
  return (
    <div className="flex w-full h-18 bg-[#5046E6] justify-between px-40 items-center">
      <div className="flex gap-4 text-white font-bold text-2xl items-center">
        <TicketPlus />
        <Link to="/">
          <h1 className=" ">Ticketing System</h1>
        </Link>
      </div>

      <div className="flex gap-2">
        <Link to="/login">
          <Button className="bg-[#4338CA] hover:bg-blue-700 text-xl text-white cursor-pointer">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-white hover:bg-gray-300 text-xl text-blue-500  cursor-pointer">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}
