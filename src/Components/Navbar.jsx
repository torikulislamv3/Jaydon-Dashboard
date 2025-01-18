import { CgProfile } from "react-icons/cg";
import { CiSearch, CiShuffle } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiFlagCheckeredFill } from "react-icons/pi";
import { RiEmotionLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-white px-10 -mb-5">
  <div className="navbar-start">
    <div>
      <div>
      <span className="font-bold text-4xl text-green-500">M</span>
      </div>
    </div>
  </div>
  <div className="mr-[600px] text-2xl">
  <IoIosArrowBack className="mr-5 text-2xl"/>
  <CiSearch className="mr-2"/>
  <button className="button flex justify-center items-center bg-slate-500 p-[2px] rounded-md">
  <CiShuffle />
  <p>K</p>
  </button>
  </div>
  <div className="navbar-end">
    <div className="flex gap-x-6 text-2xl">
    <PiFlagCheckeredFill />
    <FaBell />
    <CgProfile />
    <IoSettingsOutline />
    <RiEmotionLine />
    </div>
  </div>
</div>
    </div>
  )
}
