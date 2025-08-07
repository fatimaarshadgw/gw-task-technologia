import { Button } from "@/components/ui/button";
import { FaArrowRight, FaBars, FaHamburger } from "react-icons/fa";
import NavbarDropdownMenu from "./dropdownmenu";

 
 export default function Navbar() {
  return (
   <nav className="relative">
  <div className="fixed lg:static top-0 left-0 w-full z-40 bg-white h-17">
    <div className="flex items-center justify-between h-full border-b border-gray-300 mx-8">
      <img
        src="logo.svg"
        alt="logo"
        className="px-5 py-3 w-auto h-15"
      />
      
       <NavbarDropdownMenu/>


      <div className="flex items-center justify-end gap-4 px-6">
      {/* Client Support */}
      <div className="hidden md:flex flex-col items-end mt-2.5">
      <Button
      variant="secondary"
      className="p-1 w-27 text-[12px] text-gray-700 font-medium gap-1 h-4 rounded">
      Client Support <FaArrowRight size={9} className="!w-3 !h-2 !text-[10px]" />
    </Button>
    <p className="font-medium text-gray-700 text-[16px] whitespace-nowrap mt-1">
      1-800-356-8933
    </p>
       </div>

      {/* Contact Us */}
     <Button className="text-white bg-blue-800 hover:bg-gray-800 hover:text-white p-5 rounded">
    Contact Us
      </Button>

     {/* Hamburger (only on small screens) */}
     <FaBars className="lg:hidden size-5 text-gray-700 cursor-pointer" />
      </div>
      
    </div>
  </div>
</nav>

  );
}