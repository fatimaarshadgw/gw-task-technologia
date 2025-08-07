'use client';

import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';

export default function NavbarDropdownMenu() {
  return (
    <div className="hidden lg:w-full lg:flex lg:justify-start lg:bg-white py-4">
      <nav className="relative z-50 ml-23">
        <ul className="flex gap-6 text-base font-medium text-black whitespace-nowrap relative">
          
          {/* H. */}
          <li className="relative group">
  <div className="flex flex-col">
    <button className="hover:text-blue-700 flex items-center">
      H.
      <FaCaretDown className="hover:text-blue-700 text-gray-500 size-3" />
    </button>

    <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white shadow-md p-4 rounded-md min-w-[250px] z-50">
      <Link href="/it" className="block hover:text-blue-700 py-1">IT Services</Link>
      <Link href="/appdevelop" className="block hover:text-blue-700 py-1">App Development</Link>
    </div>
  </div>
</li>

          {/* Solutions */}
          <li className="relative group">
            <div className="flex flex-col">
            <button className="hover:text-blue-700 flex">
              Solutions
              <FaCaretDown className="hover:text-blue-700 text-gray-500 size-3 mt-1.5"/>
              </button>
            <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white shadow-md p-4 rounded-md min-w-[250px] z-50">
              <Link href="/managed" className="block hover:text-blue-700 py-1">Managed Services</Link>
              <Link href="/consult" className="block hover:text-blue-700 py-1">IT Consulting & Advisory</Link>
              <Link href="/cyber" className="block hover:text-blue-700 py-1">Cyber Security</Link>
              <Link href="/webdev" className="block hover:text-blue-700 py-1">Web Development</Link>
              <Link href="/mobdev" className="block hover:text-blue-700 py-1">Mobile Development</Link>
              <Link href="/cloud" className="block hover:text-blue-700 py-1">Cloud Services</Link>
            </div>
            </div>
          </li>

          {/* Company */}
          <li className="relative group">
            <div className="flex flex-col">
            <button className="hover:text-blue-700 flex">Company<FaCaretDown className="text-gray-500 size-3 mt-1.5 hover:text-blue-700 "/></button>
           <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white shadow-md p-4 rounded-md min-w-[250px] z-50">
              <Link href="/about" className="block hover:text-blue-700 py-1">About Us</Link>
              <Link href="/team" className="block hover:text-blue-700 py-1">Why Us</Link>
              <Link href="/team" className="block hover:text-blue-700 py-1">Team</Link>
              <Link href="/team" className="block hover:text-blue-700 py-1">Careers</Link>
              <Link href="/team" className="block hover:text-blue-700 py-1">Partners & Certifications</Link>
              <Link href="/team" className="block hover:text-blue-700 py-1">Reviews & Awards</Link>
            </div>
            </div>
          </li>

          {/* Case Studies */}
          <li>
            <Link href="/case-studies" className="hover:text-blue-700">Case Studies</Link>
          </li>

          {/* Blog */}
          <li>
            <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          </li>

          {/* Resources */}
          <li className="relative group">
            <div className="flex flex-col">
            <button className="hover:text-blue-700 flex">Resources<FaCaretDown className="hover:text-blue-700 text-gray-500 size-3 mt-1.5"/></button>
            <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white shadow-md p-4 rounded-md min-w-[250px] z-50">
              <Link href="/guides" className="block hover:text-blue-700 py-1">Schedule a Consultation</Link>
              <Link href="/tools" className="block hover:text-blue-700 py-1">Events</Link>
              <Link href="/tools" className="block hover:text-blue-700 py-1">FAQ</Link>
            </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
