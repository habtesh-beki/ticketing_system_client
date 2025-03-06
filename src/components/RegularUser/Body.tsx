// import Header from "../Header/HeaderAfterLogedIn";
import { Textarea } from "../ui/textarea";
import { CirclePlus, Clock10, FileWarning, Ticket } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const datas = [
  {
    title: "Unable to access my account",
    status: "open",
    description:
      "I have been trying to access my account, but it keeps throwing an error and does not let me in.",
    date: "22/02/2025",
  },
  {
    title: "Feature request for dashboard improvements",
    status: "open",
    description:
      "I would like to request a feature for improving the dashboard with more user-friendly designs and filters.",
    date: "22/02/2025",
  },
  {
    title: "Feature request for dashboard improvements",
    status: "open",
    description:
      "I would like to request a feature for improving the dashboard with more user-friendly designs and filters.",
    date: "22/02/2025",
  },
];

export default function Body() {
  return (
    <div className="bg-[#F3F4F6] flex-grow py-20 px-50">
      <div>
        <div className="text-3xl flex items-center gap-4 mb-4 ">
          <Ticket size={36} className="text-[#4338CA]" />{" "}
          <h3 className="font-extrabold">My Support Tickets</h3>
        </div>

        <h4 className="text-[#4B5563]">View and manage your support tickets</h4>
      </div>
      <div className="flex gap-6 mt-10 h-11/12">
        <div className="bg-white  w-2/3 h-5/6 rounded-lg px-10 py-6">
          <h1 className="flex items-center gap-4">
            <Ticket size={36} className="text-[#5046E6]" />{" "}
            <h1 className="text-3xl font-bold">My Tickets</h1>
          </h1>
          <div className="flex flex-col gap-3 mt-10 overflow-scroll">
            {datas.map((data) => (
              <div className="flex flex-col border rounded-md h-60 p-3 shadow gap-4">
                <div className="flex justify-between mt-4">
                  <h2 className="text-2xl font-bold">{data.title}</h2>
                  <h3 className="border px-3 rounded-sm">{data.status}</h3>
                </div>
                <p>{data.description}</p>
                <p className="flex gap-3">
                  <Clock10 /> Created : {data.date}
                </p>
                <p className="flex">
                  <FileWarning /> Priority: middum
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white  flex-grow  rounded-lg p-6 h-2/3">
          <h1 className="flex items-center gap-4 mb-4">
            <CirclePlus size={36} className="text-[#5046E6]" />{" "}
            <h1 className="text-3xl font-bold">create new ticket</h1>
          </h1>
          <div className="flex flex-col gap-3 w-full mt-5 border p-8 rounded-md mt-4">
            <div>
              <label className="font-bold mb-2">Title</label>
              <Input className="h-12" />
            </div>
            <div>
              <label className="font-bold mb-2">Description</label>
              <Textarea placeholder="Write your description here" />
            </div>
            <Button className="bg-[#4338CA] text-white text-xl mt-3">
              Create Ticket
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
