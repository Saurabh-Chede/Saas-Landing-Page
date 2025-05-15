import InstaIcon from "../assets/icons/insta.svg"
import LinkedinIcon from "../assets/icons/linkedin.svg"
import Pinterest from "../assets/icons/pinterest.svg"
import Tiktok from "../assets/icons/tiktok.svg"
import Xsocial from "../assets/icons/x-social.svg"
import YouTube from "../assets/icons/youtube.svg"


export const Footer = () => {
  return (
    <div className="bg-black text-white border-t border-white/20 py-6">
      <div className="container">
       <div className="sm:flex justify-between mx-auto">
         <p className="text-lg py-2 px-4 text-center tracking-tighter text-white text-opacity-70">@ 2024 Your Company, Inc. All rights reserved</p>
        <div className="flex justify-center items-center gap-2 text-white text-opacity-70">
         <InstaIcon/>
         <LinkedinIcon/>
         <Tiktok/>
         <Xsocial/>
         <YouTube/>
        </div>
       </div>
      </div>
    </div>
  );
};
