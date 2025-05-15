import { FaLongArrowAltRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] lg:w-[2380px] lg:h-[1000px] sm:h-[786px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a href="#" className="border py-1 px-2 rounded-lg border-white/30">
          <span className="text-white text-opacity-50">Version 2.0 is Here</span>
          <span className="ml-1 text-white text-opacity-85 inline-flex justify-center items-center gap-1">Read More <FaLongArrowAltRight className="" size={18}/></span>
        </a>
        </div>
        <h1 className="text-7xl sm:text-9xl text-center mt-8 tracking-tighter font-bold">One task <br /> at a time</h1>
       
         <p className="text-center sm:max-w-[786px] mx-auto tracking-tighter mt-8 text-xl">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
  
        <div className="flex justify-center items-center">
          <button className="mt-8 bg-white px-5 py-3 font-medium text-black rounded-md">Get for free</button>
        </div>
      </div>
      
    </div>
  );
};
