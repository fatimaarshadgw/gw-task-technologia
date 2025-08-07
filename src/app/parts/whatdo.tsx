import { Button } from "@/components/ui/button";

export default function Whatwedo() {
  return (
    <div className="w-full bg-white py-10 px-4 flex justify-center">
      <div className="bg-gray-800 w-full max-w-7xl rounded flex flex-row gap-6 p-2 md:p-2 lg:p-8">

        
        {/* Left: Text Section */}
        <div className="w-full md:w-1/2 flex flex-col text-left">
          <Button className="text-indigo-200 text-[9.5px] bg-gray-700 hover:bg-gray-800 hover:text-indigo-100 h-7 rounded w-24">
            WHAT WE DO
          </Button>

          <p className="text-xl md:text-3xl lg:text-5xl lg:mt-28 md:mt-20 mt-10 font-semibold text-indigo-100">
            Simplifying IT<br />for a complex world.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src="/shape-dots.svg"
            alt=""
            className="h-30 md:h-40 lg:h-60 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
