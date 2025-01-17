import { IoBag, IoSpeedometer } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import { CiBank, CiFlag1, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaFileInvoice, FaFileInvoiceDollar, FaSwatchbook } from "react-icons/fa";
import { LuFileSliders } from "react-icons/lu";
import { IoIosArrowForward, IoIosChatboxes, IoIosMailUnread } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiBloggerLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

export default function SideBox() {
  return (
    <>
       <aside className="w-64 bg-white shadow-lg pl-6 pr-10">
      <ul>
  <li className="p-[2.5px] hover:bg-gray-200">OVERVIEW</li>
  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <IoSpeedometer />
    <span>App</span>
  </li>
  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <IoBag />
    <span>E-Commerce</span>
  </li>
  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <SiSimpleanalytics />
    <span>Analytics</span>
  </li>
  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <CiBank />
    <span>Banking</span>
  </li>
  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <FaSwatchbook />
    <span>Banking</span>
  </li>
  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <LuFileSliders />
    <span>Files</span>
  </li>
  <li className="p-[2.5px] hover:bg-gray-200">MANAGEMENT</li>
  
  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <div className="flex justify-between w-full">
      <div className="flex gap-x-2 items-center">
        <CiUser />
        <span>User</span>
      </div>
      <IoIosArrowForward />
    </div>
  </li>

  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <div className="flex justify-between w-full">
      <div className="flex gap-x-2 items-center">
      <MdProductionQuantityLimits />
        <span>Product</span>
      </div>
      <IoIosArrowForward />
    </div>
  </li>

  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <div className="flex justify-between w-full">
      <div className="flex gap-x-2 items-center">
      <CiShoppingCart />
        <span>Order</span>
      </div>
      <IoIosArrowForward />
    </div>
  </li>

  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <div className="flex justify-between w-full">
      <div className="flex gap-x-2 items-center">
      <FaFileInvoiceDollar />
        <span>Invoice</span>
      </div>
      <IoIosArrowForward />
    </div>
  </li>

  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <div className="flex justify-between w-full">
      <div className="flex gap-x-2 items-center">
      <RiBloggerLine />
        <span>Blog</span>
      </div>
      <IoIosArrowForward />
    </div>
  </li>

  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <div className="flex justify-between w-full">
      <div className="flex gap-x-2 items-center">
      <FiShoppingBag />
        <span>Job</span>
      </div>
      <IoIosArrowForward />
    </div>
  </li>

  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <div className="flex justify-between w-full">
      <div className="flex gap-x-2 items-center">
      <CiFlag1 />
        <span>Tour</span>
      </div>
      <IoIosArrowForward />
    </div>
  </li>

  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <div className="flex justify-between w-full">
      <div className="flex gap-x-2 items-center">
      <FaFileInvoice />
        <span>File Manager</span>
      </div>
      <IoIosArrowForward className="relative left-[1px]" />
    </div>
  </li>

  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
    <div className="flex justify-between w-full">
      <div className="flex gap-x-2 items-center">
      <IoIosMailUnread />
        <span>Mail</span>
      </div>
      <p className="text-red-800 border-2 rounded-lg bg-red-100 p-[1px]">+32</p>
    </div>
  </li>

  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
  <IoIosChatboxes />
    <span>Chat</span>
  </li>

  <li className="p-[2.5px] flex gap-x-2 items-center cursor-pointer hover:bg-gray-200 hover:text-green-600">
  <SlCalender />
    <span>Calendar</span>
  </li>
</ul>


      </aside>
    </>
  )
}
