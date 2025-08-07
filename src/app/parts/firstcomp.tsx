import { Button } from "@/components/ui/button";

export default function ManageIT() {
  return (
    <div className="mt-10 w-full h-auto flex flex-col items-center justify-center px-6 overflow-x-hidden">
      
      <div className="w-full flex flex-col md:flex-row justify-between items-start px-4 gap-6">

        {/* text */}
        <div className="w-full md:max-w-[580px] flex flex-col text-left">
          <p className="text-3xl mt-16 md:text-5xl lg:text-6xl font-semibold text-black ">
            We manage your IT,<br /> so you can manage<br /> your business.
          </p>
          <p className="text-lg md:text-3xl mt-4 text-black">
            Take charge of your business<br /> continuity with innovative IT solutions
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Button className="text-white bg-blue-800 hover:bg-gray-800 hover:text-white p-6 rounded w-fit">
              Schedule a Free Consultation
            </Button>
            <Button className="text-blue-800 bg-indigo-100 hover:bg-gray-800 hover:text-white p-6 rounded w-fit">
              Services
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-auto flex justify-end md:justify-center md:mt-16 lg:mt-0">
          <img
            src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/GettyImages-618762080-1.jpg"
            alt=""
            className="w-[270px] h-[120px] md:w-[580px] md:h-[400px] object-cover clip-diagonal rounded"
          />
        </div>
      </div>

      {/* Bottom border */}
      <div className="w-full border-t border-gray-300 mt-10 mb-8" />
    </div>
  );
}
