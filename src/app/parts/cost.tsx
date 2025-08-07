export default function Costcontent() {
  return (
    <div>
      
      <div className="w-full flex flex-col sm:flex-col md:flex-row flex-wrap justify-center items-start px-5">

        {/* Card 1 */}
        <div className="w-full sm:w-3/4 md:w-1/4 flex flex-col text-left">
          <img className="w-17 h-17" src="/Cost-effectiveness.svg" alt="" />
          <p className="text-xl font-semibold text-black mt-4">Cost-effectiveness</p>
          <p className="text-sm mt-5 text-gray-500 ">
            We offer affordable IT solutions that help you reduce costs and improve your bottom line.
          </p>
         <div className="w-full border-t border-gray-300 mt-10 mb-10 md:hidden" />

        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-3/4 md:w-1/4 flex flex-col text-left">
          <img className="w-17 h-17" src="/Innovative.svg" alt="" />
          <p className="text-xl font-semibold text-black mt-4">Innovative Technology</p>
          <p className="text-sm mt-5 text-gray-500">
            We stay up-to-date with the latest technology trends and offer innovative solutions that help<br/> you stay ahead of the competition.
          </p>

          <div className="w-full border-t border-gray-300 mt-10 mb-10 md:hidden" />
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-3/4 md:w-1/4 flex flex-col text-left">
          <img className="w-17 h-17" src="/Industry.svg" alt="" />
          <p className="text-xl font-semibold text-black mt-4">Industry Expertise</p>
          <p className="text-sm mt-5 text-gray-500">
            We specialize in serving specific industries, such<br/> as healthcare, finance, or manufacturing, and <br/>offer tailored solutions that meet your unique needs.
          </p>

          <div className="w-full border-t border-gray-300 mt-10 mb-10 md:hidden" />
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-3/4 md:w-1/4 flex flex-col text-left">
          <img className="w-17 h-17" src="/Scalability.svg" alt="" />
          <p className="text-xl font-semibold text-black mt-4">Scalability</p>
          <p className="text-sm mt-5 text-gray-500">
            Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.
          </p>

          <div className="w-full border-t border-gray-300 mt-10 mb-10 md:hidden" />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-full border-t border-gray-300 mt-10 mb-7" />

      </div>

      {/* About Section */}
      <div className="flex flex-col items-start px-7">
        <div className="text-xs font-semibold text-blue-700 mt-4">About Tecnologia</div>
        <div className="w-full max-w-[6rem] border-t border-2 border-blue-100 " />
      </div>
    </div>
  );
}
