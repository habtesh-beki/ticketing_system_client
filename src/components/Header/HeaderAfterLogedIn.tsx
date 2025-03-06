import { LogOut, TicketPlus, User } from "lucide-react";
import { Button } from "../ui/button";
export default function Header() {
  return (
    <div className="flex w-full h-18 bg-[#5046E6] justify-between px-40 items-center">
      <div className="flex gap-4 text-white font-bold text-2xl items-center">
        <TicketPlus />
        <h1 className=" ">Ticketing System</h1>
      </div>

      <div className="flex gap-6">
        <h2 className="flex text-white font-bold items-center">
          <User /> <h2>Regular User</h2>
        </h2>
        <Button className="bg-[#4338CA] text-xl text-white cursor-pointer">
          <LogOut /> LogOut
        </Button>
      </div>
    </div>
  );
}
