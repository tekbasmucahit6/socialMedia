import { FcGlobe } from "react-icons/fc";
import { IoNotificationsSharp } from "react-icons/io5";
import { TbMessageCircleFilled } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex justify-center items-start  w-full">
      <div className="templateWidth flex justify-between items-center w-full py-2 px-3">
        <div className="flex justify-center itmes-center gap-2">
          <strong className="">
            <Link to={"/"}>
              <FcGlobe size={30} />
            </Link>
          </strong>
          <input
            type="search"
            className="border border-[#1E3E62] bg-[#1E3E62] text-white  rounded-xl px-3 focus:outline-none hidden xl:flex lg:flex md:flex"
            placeholder="#explore"
          />
        </div>

        <div className="flex justify-center items-center gap-5 text-gray-300 ">
          <div>
            <Link to="/messages">
              <p>
                <TbMessageCircleFilled size={25} />
              </p>
            </Link>
          </div>
          <div>
            <Link to="/messages">
              <p>
                <IoNotificationsSharp size={25} />
              </p>
            </Link>
          </div>
          <div className="border-l-2 border-[#1E3E62] px-3">
            <Link to="/login" className="">
              <p className="flex justify-cenrer items-center text-xs gap-2 bg-[#1E3E62] py-2 rounded-full px-3">
                <VscAccount size={20} />
                <p className="hidden xl:flex lg:flex md:flex">mücahit tekbaş</p>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
