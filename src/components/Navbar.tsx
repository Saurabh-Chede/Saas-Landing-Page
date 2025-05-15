import logoImage from "../assets/images/logosaas.png";
import Image from "next/image";
import MenuIcon from "../assets/icons/menu.svg"


export const Navbar = () => {
  return (
    <div className="px-6 bg-black">
      <div className="py-4 flex justify-between items-center">
        <div className="relative">
          <div className="absolute blur-md w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB29CF,#FFDD9B,#C2F081,#2FD8FE)]"></div>
           <Image src={logoImage} alt="logoImage" className="h-12 w-12 relative"></Image>
        </div>
        <div className="border border-white border-opacity-10 rounded-md h-10 w-10 inline-flex justify-center items-center sm:hidden">
           <MenuIcon className="text-white"/>
        </div>
        <nav className="text-white gap-6 hidden items-center sm:flex">
          <a className=" text-white hover:text-opacity-55" href="/">Home</a>
          <a className=" text-white hover:text-opacity-55" href="/">Contact</a>
          <a className=" text-white hover:text-opacity-55" href="/">About</a>
          <a className=" text-white hover:text-opacity-55" href="/">Updates</a>
          <button className="px-3 py-1 rounded-md bg-white text-black">Get the link</button>
        </nav>
      </div>
    </div>
  );
};
