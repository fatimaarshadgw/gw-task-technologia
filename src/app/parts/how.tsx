import { Button } from "@/components/ui/button";

export default function Howwedo() {
  return (
    <div className="w-full bg-white flex flex-col items-center overflow-x-hidden">
      {/* HOW WE DO Section */}
      <div className="w-screen bg-gradient-to-b from-blue-100 to-gray-300 mt-10 py-16">
        {/* Heading and Button */}
        <div className="max-w-7xl mx-auto px-4 text-left">
          <Button className="text-gray-500 ml-5 text-[9.5px] bg-white hover:bg-white h-7 rounded w-20 mb-8">
            HOW WE DO
          </Button>
          <h2 className="text-2xl lg:text-5xl ml-5 font-bold md:text-3xl text-black mb-4">
            Solutions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl p-9 mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded shadow-md p-6 text-left hover:shadow-lg transition">
            <img className="w-17 h-17" src="/Cost-effectiveness.svg" alt="" />
            <h3 className="text-2xl font-semibold mb-2 mt-4 text-black hover:text-blue-800 cursor cursor-pointer">Managed Services</h3>
            <p className="text-gray-700 text-sm mt-4">
              Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.
            </p>

             <div className="hidden md:block w-full border-t border-gray-300 mt-5 mb-5" />

            <div className="flex flex-col items-start">
            <div className="text-xs font-semibold text-blue-700">Learn more</div>
            <div className="w-full max-w-[4rem] border-t border-2 border-blue-100" />
         </div>
        </div>

          {/* Card 2 */}
          <div className="bg-white rounded shadow-md p-6 text-left hover:shadow-lg transition">
            <img className="w-17 h-17" src="/Innovative.svg" alt="" />
            <h3 className="text-2xl font-semibold mt-4 mb-2 text-black hover:text-blue-800 cursor cursor-pointer">IT Consulting & Advisory</h3>
            <p className="text-gray-700 text-sm mt-4">
              The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth
            </p>

            <div className="hidden md:block w-full border-t border-gray-300 mt-5 mb-5" />

            <div className="flex flex-col items-start">
            <div className="text-xs font-semibold text-blue-700">Learn more</div>
            <div className="w-full max-w-[4rem] border-t border-2 border-blue-100" />
         </div>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded shadow-md p-6 text-left hover:shadow-lg transition">
            <img className="w-17 h-17" src="/Industry.svg" alt="" />
            <h3 className="text-2xl mt-4 font-semibold mb-2 text-black hover:text-blue-800 cursor cursor-pointer">Cyber Security</h3>
            <p className="text-gray-700 text-sm mt-4">
              Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.
            </p>

            <div className="hidden md:block w-full border-t border-gray-300 mt-5 mb-5" />

            <div className="flex flex-col items-start">
            <div className="text-xs font-semibold text-blue-700">Learn more</div>
            <div className="w-full max-w-[4rem] border-t border-2 border-blue-100" />
         </div>

          </div>

          {/* Card 4 */}
          <div className="bg-white rounded shadow-md p-6 text-left hover:shadow-lg transition">
            <img className="w-17 h-17" src="/Scalability.svg" alt="" />
            <h3 className="text-2xl mt-4 font-semibold mb-2 text-black hover:text-blue-800 cursor cursor-pointer">Web Development</h3>
            <p className="text-gray-700 text-sm mt-4">
              Our web development services can help you establish an impactful online presence and reach your target audience effectively.
            </p>

            <div className="hidden md:block w-full border-t border-gray-300 mt-5 mb-5" />

            <div className="flex flex-col items-start">
            <div className="text-xs font-semibold text-blue-700">Learn more</div>
            <div className="w-full max-w-[4rem] border-t border-2 border-blue-100" />
         </div>

          </div>

          {/* Card 5 */}
          <div className="bg-white rounded shadow-md p-6 text-left hover:shadow-lg transition">
            <img className="w-17 h-17" src="/Cost-effectiveness.svg" alt="" />
            <h3 className="text-2xl mt-4 font-semibold mb-2 text-black hover:text-blue-800 cursor cursor-pointer">Mobile Development</h3>
            <p className="text-gray-700 text-sm mt-4">
              We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.
            </p>

            <div className="hidden md:block w-full border-t border-gray-300 mt-5 mb-5" />

            <div className="flex flex-col items-start">
            <div className="text-xs font-semibold text-blue-700">Learn more</div>
            <div className="w-full max-w-[4rem] border-t border-2 border-blue-100" />
         </div>

          </div>

          {/* Card 6 */}
          <div className="bg-white rounded shadow-md p-6 text-left hover:shadow-lg transition">
            <img className="w-17 h-17" src="/Innovative.svg" alt="" />
            <h3 className="text-2xl font-semibold mb-2 mt-4 text-black hover:text-blue-800 cursor cursor-pointer">Cloud Services</h3>
            <p className="text-gray-700 text-sm mt-4">
              With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.
            </p>

            <div className="hidden md:block w-full border-t border-gray-300 mt-5 mb-5" />

            <div className="flex flex-col items-start">
            <div className="text-xs font-semibold text-blue-700">Learn more</div>
            <div className="w-full max-w-[4rem] border-t border-2 border-blue-100" />
         </div>

          </div>

        </div>

       <div className="flex items-center justify-center mt-2">
  <Button className="text-white bg-blue-800 hover:bg-gray-800 hover:text-white p-5 rounded w-fit">
    View All Solutions
  </Button>
</div>
      </div>
    </div>
  );
}
