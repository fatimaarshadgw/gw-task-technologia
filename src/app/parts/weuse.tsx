import { Button } from "@/components/ui/button";
import { FaCirclePlus } from "react-icons/fa6";
import DragCarousel from "./cardcaro";

export default function Bringing() {
  return (
    <div className="w-full bg-white flex flex-col items-center overflow-x-hidden">
      {/* HOW WE DO Section */}
      <div className="w-screen bg-zinc-800 mt-10 py-16">
        {/* Heading and Button */}
        <div className="max-w-7xl mx-auto px-4 text-left">
          <Button className="text-indigo-100 font-semibold ml-5 text-[11px] bg-gray-900 hover:bg-gray-900 h-8 rounded w-22 mb-8">
            What we use
          </Button>
          <h2 className="text-2xl lg:text-5xl ml-5 font-bold md:text-3xl text-indigo-100 mb-4">
            Bringing the best IT vendors to you.
          </h2>
          <h3 className="ml-5 text-indigo-100 mt-10">
            Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.
          </h3>
        </div>

        

        <DragCarousel/>

      </div>
    </div>
  );
}
