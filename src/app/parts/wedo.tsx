import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Solving() {
  return (
    <div className="w-full bg-white py-10 px-4 flex justify-center">
      <div className="w-full md:w-2/3 flex flex-col text-left">
        <Button className="text-gray-500 text-[10px] mt-10 font-bold bg-gray-200 hover:bg-gray-200 hover:text-gray-500 h-8 rounded w-28">
          WHAT WE DO
        </Button>

        <p className="text-2xl md:text-4xl lg:text-5xl mt-6 font-bold text-black">
          Solving IT challenges in every industry, every day.
        </p>

        

           <div className="w-full flex justify-center">
  <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-7 max-w-[800px] mt-15">
    
    <Button className="flex items-center bg-gray-100 rounded-full text-black text-sm px-0 pr-4 hover:bg-gray-100 h-[60px] w-fit">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 border border-gray-300 ml-[-1px]">
        <Image
          src="/photo-1581091878591-4f0714c6f32f-300x300 (1).webp"
          alt="Example"
          width={60}
          height={60}
          className="object-cover w-full h-full"
        />
      </div>
      <span className="ml-1.5 text-base font-semibold text-left leading-tight whitespace-nowrap">
        Industry & Manufacturing
      </span>
    </Button>

    <Button className="flex items-center bg-gray-100 rounded-full text-black text-sm px-0 pr-4 hover:bg-gray-100 h-[60px] w-fit">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 border border-gray-300 ml-[-1px]">
        <Image
          src="/gettyimages-1385683178-612x612-1-300x300 (1).webp"
          alt="Example"
          width={60}
          height={60}
          className="object-cover w-full h-full"
        />
      </div>
      <span className="ml-1.5 text-base font-semibold text-left leading-tight whitespace-nowrap">
        Transportation & Logistics
      </span>
    </Button>

    <Button className="flex items-center bg-gray-100 rounded-full text-black text-sm px-0 pr-4 hover:bg-gray-100 h-[60px] w-fit">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 border border-gray-300 ml-[-1px]">
        <Image
          src="/gettyimages-1156457427-2048x2048-1-300x300 (2).webp"
          alt="Example"
          width={60}
          height={60}
          className="object-cover w-full h-full"
        />
      </div>
      <span className="ml-1.5 text-base font-semibold text-left leading-tight whitespace-nowrap">
        Healthcare
      </span>
    </Button>

    <Button className="flex items-center bg-gray-100 rounded-full text-black text-sm px-0 pr-4 hover:bg-gray-100 h-[60px] w-fit">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 border border-gray-300 ml-[-1px]">
        <Image
          src="/gettyimages-173289625-2048x2048-1-300x300 (1).webp"
          alt="Example"
          width={60}
          height={60}
          className="object-cover w-full h-full"
        />
      </div>
      <span className="ml-1.5 text-base font-semibold text-left leading-tight whitespace-nowrap">
        Banks & Insurance
      </span>
    </Button>

    <Button className="flex items-center bg-gray-100 rounded-full text-black text-sm px-0 pr-4 hover:bg-gray-100 h-[60px] w-fit">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 border border-gray-300 ml-[-1px]">
        <Image
          src="/gettyimages-1375143131-2048x2048-1-300x300 (1).webp"
          alt="Example"
          width={60}
          height={60}
          className="object-cover w-full h-full"
        />
      </div>
      <span className="ml-1.5 text-base font-semibold text-left leading-tight whitespace-nowrap">
        Consulting Providers
      </span>
    </Button>

    <Button className="flex items-center bg-gray-100 rounded-full text-black text-sm px-0 pr-4 hover:bg-gray-100 h-[60px] w-fit">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 border border-gray-300 ml-[-1px]">
        <Image
          src="/gettyimages-1429906360-2048x2048-1-300x300 (1).webp"
          alt="Example"
          width={60}
          height={60}
          className="object-cover w-full h-full"
        />
      </div>
      <span className="ml-1.5 text-base font-semibold text-left leading-tight whitespace-nowrap">
        Non-Profit
      </span>
    </Button>

  </div>
</div>

     <div className="flex flex-col items-start mt-13">
            <div className="text-xs font-semibold text-blue-700">View All Industries</div>
            <div className="w-full max-w-[7rem] border-t border-2 border-blue-100" />
         </div>
        </div>
      </div>
  );
}
