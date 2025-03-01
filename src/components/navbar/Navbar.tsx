import { GoHomeFill } from "react-icons/go";
import { BiSolidMessageRounded } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
export default function Navbar() {
    return <div className="w-full bg-transparent h-full">
        <div className="flex gap-5 xl:flex-col lg:flex-col md:flex-col xl:justify-start lg:justify-start md:justify-start justify-between items-start w-full px-2 xl:px-0 lg:px-0 md:px-0">
            <Link to="/" className="flex justify-center items-center gap-2"><GoHomeFill size={20} /> anasayfa</Link>
            <Link to="/" className="flex justify-center items-center gap-2"><BiSolidMessageRounded size={20} /> mesajlar</Link>
            <Link to="/" className="flex justify-center items-center gap-2"><VscAccount size={20} /> hesabım</Link>
      </div>
  </div>;
}
