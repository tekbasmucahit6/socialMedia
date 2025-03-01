import Header from "../components/Header/Header";
import Navbar from "../components/navbar/Navbar";
import AllRoutes from "../routes/AllRoutes";
import { useAuthStore } from "../store/useAuthStore";

export default function Layouts() {
  const { user } = useAuthStore();
  return (
    <div className="w-full">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex justify-center items-start w-full pt-5">
        <div className="templateWidth  flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-start w-full px-3">
          {user ? (
            <div className="w-[450px] hidden xl:flex lg:flex md:flex">
              <Navbar />
            </div>
          ) : null}
          <div className="w-full">
            <AllRoutes />
          </div>
          {user ? (
            <div className="w-[300px] hidden xl:flex lg:flex md:flex">
              safsdaf
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
