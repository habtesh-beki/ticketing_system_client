import { Clock10, FileWarning, Ticket } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "../ui/separator";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { title } from "process";
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
type Inputs = {
  status: string;
};
export default function Body() {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const Id = localStorage.getItem("user");
    try {
      const loginUser = await axios.put(
        `http://127.0.0.1:3000/api/v1/${Id}`,
        data
      );
      const token = loginUser.data.token;
      localStorage.setItem("auth-token", token);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-[#F3F4F6] flex-grow py-20 px-50 min-h-11/12">
      <div>
        <div className="text-3xl flex items-center gap-4 mb-4 ">
          <Ticket size={36} className="text-[#4338CA]" />{" "}
          <h3 className="font-extrabold">Admin DashBoard</h3>
        </div>

        <h4 className="text-[#4B5563]">Manage all support tickets form user</h4>
      </div>
      <div className="flex gap-6 mt-10 h-10/12">
        <div className="bg-white w-full h-5/6 rounded-lg px-20 py-6">
          <h1 className="flex items-center gap-4">
            <Ticket size={36} className="text-[#5046E6]" />{" "}
            <h1 className="text-3xl font-bold">All Tickets</h1>
          </h1>
          <div className="flex flex-col gap-3 mt-10 ">
            {datas.map((data) => (
              <div className="flex flex-col border rounded-md  p-10 shadow gap-4">
                <div className="flex justify-between mt-4">
                  <h2 className="text-2xl font-bold">{data.title}</h2>
                  <h3 className="border px-3 rounded-sm bg-blue-300">
                    {data.status}
                  </h3>
                </div>
                <p>{data.description}</p>
                <p className="flex gap-3">
                  <Clock10 /> Created : {data.date}
                </p>
                <p className="flex">
                  <FileWarning /> Priority: middum
                </p>
                <Separator />
                <div className="flex justify-between">
                  <p className="font-bold">Created By: Regular User</p>
                  <form className="flex justify-between items-center gap-2">
                    <span className="font-bold">Update Status</span>
                    <Select
                      onValueChange={(value) => setValue("status", value)}
                    >
                      <SelectTrigger
                        {...register("status", { required: true })}
                        className="focus:ring-blue-600 w-full"
                      ></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">In Progress</SelectItem>
                        <SelectItem value="dark">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
