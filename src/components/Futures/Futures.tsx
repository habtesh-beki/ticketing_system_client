import { TicketPlus } from "lucide-react";
export default function Futures() {
  const Articls = [
    {
      logo: "TicketPlus",
      title: "Create Tickets",
      description:
        "Easily create support tickets with detailed descriptions and priority levels.",
    },
    {
      logo: "",
      title: "Track Progress",
      description:
        "Monitor the status of your tickets in real-time as they move through the support process.",
    },
    {
      logo: "",
      title: "Role-Based Access",
      description:
        "Secure role-based access control for users and administrators with different permissions.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full h-2/5 text-black gap-3 mt-6">
      <h3 className="text-[#4338CA]">FEATURES</h3>
      <h1 className="text-4xl font-extrabold">
        Everything you need for support
      </h1>
      <h1 className="text-[#7E7E7E]">
        Our ticketing system provides all the tools you need to manage <br />{" "}
        support requests efficiently.
      </h1>
      <article className="flex gap-5 justify-center mt-14">
        {Articls.map((article) => (
          <div className="flex flex-col w-1/5 border p-6 h-50 rounded-md gap-3 shadow-lg">
            <TicketPlus
              size={48}
              className=" text-white bg-[#4338CA] p-2 rounded"
            />
            <h2 className="font-bold">{article.title}</h2>
            <h3 className="text-[#7E7E7E]">{article.description}</h3>
          </div>
        ))}
      </article>
    </div>
  );
}
