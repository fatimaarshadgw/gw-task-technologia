import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

export default function Wherewe() {
  return (
     <div className="w-full bg-white flex flex-col items-center overflow-x-hidden">
      {/* HOW WE DO Section */}
      <div className="w-screen bg-white py-16">
        {/* Heading and Button */}
        <div className="max-w-7xl mx-auto px-4 text-left">
          <Button className="text-gray-500 ml-5 text-[9.5px] bg-gray-100 hover:bg-white h-7 rounded w-20 mb-8">
            WHERE WE DO
          </Button>
          <h2 className="text-2xl lg:text-5xl ml-5 font-bold md:text-3xl text-black mb-4">
            Success Stories
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl p-9 mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded shadow-md p-6 text-left hover:shadow-lg transition border">
            <img className=" rounded-xl w-full h-46" src="/Insurance-1024x743 (1).webp" alt="" />

            <div className="text-xs font-semibold text-gray-400 mt-5">Cloud Hosting</div>

            <h3 className="text-xl font-semibold mt-3 mb-2 text-black hover:text-blue-800 cursor cursor-pointer">
                Major Insurance Provider Saves $750k per Month With Big Data Migration</h3>

            <p className="text-gray-500 text-base mt-4">
              The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
            </p>

            <p className="text-gray-500 text-sm flex gap-2 mt-4">
                <FaCheck className="text-xs"/>Modern infrastructure<br/></p>
            <p className="text-gray-500 text-sm gap-2 flex">
                <FaCheck className="text-xs"/>Consulting services
            </p>

            <div className="text-xs font-semibold text-gray-700 mt-4">Learn more</div>
            
            </div>

          {/* Card 2 */}
          <div className="bg-white rounded shadow-md p-6 text-left hover:shadow-lg transition">

            <img className=" rounded-xl w-full h-46" src="/nespresso-1024x743 (1).webp" alt="" />

            <div className="text-xs font-semibold text-gray-400 mt-5">
             IT Consulting</div>

            <h3 className="text-xl font-semibold mt-3 mb-2 text-black hover:text-blue-800 cursor cursor-pointer">
                Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story</h3>

            <p className="text-gray-700 text-sm mt-4">
              The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
            </p>

             <p className="text-gray-500 text-sm flex gap-2 mt-4">
                <FaCheck className="text-xs"/>Modern infrastructure<br/></p>
            <p className="text-gray-500 text-sm gap-2 flex">
                <FaCheck className="text-xs"/>Consulting services
            </p>
            
            <div className="text-xs font-semibold text-gray-700 mt-4">Learn more</div>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded shadow-md p-6 text-left hover:shadow-lg transition">
            
            <img className=" rounded-xl w-full h-46" src="/undergroup-1024x743 (1).webp" alt="" />

            <div className="text-xs font-semibold text-gray-400 mt-5">
                Mobile development</div>

            <h3 className="text-xl font-semibold mt-3 mb-2 text-black hover:text-blue-800 cursor cursor-pointer">
                Strategic Move to an AI-supported application for Public Safety Travel App in London</h3>
                
            <p className="text-gray-700 text-sm mt-4">
             Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route
            </p>

             <p className="text-gray-500 text-sm flex gap-2 mt-4">
                <FaCheck className="text-xs"/>Modern infrastructure<br/></p>
            <p className="text-gray-500 text-sm gap-2 flex">
                <FaCheck className="text-xs"/>Consulting services
            </p>
            
            <div className="text-xs font-semibold text-gray-700 mt-4">Learn more</div>

          </div>
          </div>
      </div>
    </div>
  );
}
