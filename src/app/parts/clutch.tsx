import { FaStar } from "react-icons/fa";

 export default function Clutchcontent(){
    return(
            <div className="w-full flex flex-wrap justify-evenly">
        
    <div className="lg:w-50 w-full justify-start flex flex-col items-center mb-12">

    <div className="flex gap-3">
    <p className="text-sm font-meduim text-gray-600">Reviewed on</p>

    <div className="flex text-orange-600 text-lg">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>

    </div>

    <div className="flex mt-2 gap-3">
    <img className="-ml-6" src="/clutch-logo.svg"/>
    <p className="text-xs font-semibold text-gray-500 mt-1">
        31 REVIEWS</p>
       </div>

     <div className="lg:hidden w-full border-t border-gray-300 mt-10 mb-10" />

    </div>

       
      <div className="w-46 flex flex-col">
  <div className="flex items-center gap-4">
   
    <div className="w-1 h-7 bg-gray-300 rounded-full"></div>
    <p className="text-3xl font-semibold text-black">
      20 <span className="text-xl pl-1">Years</span>
    </p>
  </div>
  <p className="text-base text-black mt-1 ml-5">Proven Track Record</p>
</div>

       
       
       <div className="w-46 flex flex-col">
        <div className="flex items-center gap-4">

    <div className="w-1 h-7 bg-gray-300 rounded-full"></div>
    <p className="text-3xl font-semibold text-black">98
        <span className="text-xl p-1">%</span>
        </p>
        </div>
    <p className="text-base text-black mt-1 ml-5">
        Customer Satisfaction</p>
       </div>

       <div className="w-46 flex flex-col">
        <div className="flex items-center gap-4">
        
    <div className="w-1 h-7 bg-gray-300 rounded-full"></div>
    <p className="text-3xl font-semibold text-black">1,500
        <span className="text-xl p-1">Projects</span>
        </p>
        </div>
    <p className="text-base text-black mt-1 ml-5">
        We Have Completed</p>
       </div>

       <div className="w-46 flex flex-col">
        <div className="flex items-center gap-4">
        
    <div className="w-1 h-7 bg-gray-300 rounded-full"></div>
    <p className="text-3xl font-semibold text-black">3
        <span className="text-xl p-1">Mins</span>
        </p>
        </div>
    <p className="text-base text-black ">
        Average Answer Time
        </p>
       </div>

    </div>
        
    );

 }