export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] text-center">
      <div className="container">
        <h2 className="text-4xl sm:text-6xl text-white text-center font-bold">
          Get instant acess
        </h2>
        <p className=" text-xl mt-6 tracking-tighter text-center sm:max-w-[600px] sm:mx-auto text-white text-opacity-70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form typeof="submit" className="flex flex-col mt-10 gap-2.5 justify-center mx-auto sm:flex-row">
          <input className="h-12 bg-white/20 rounded-lg px-5 sm:w-72 font-medium  placeholder:text-[#9CA3AF]" type="text" placeholder="your@gmail.com"/>
          <button className="h-12 bg-white text-black rounded-lg px-5 sm:px-3 font-medium">Get acess</button>
        </form>
      </div>
    </div>
  );
};
