import React, { useState } from "react";
import Logo from "./../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <ul className="flex justify-between mt-5 pb-5 mx-5 items-center h-[40px] border-b border-black">
        <li className="flex items-center gap-2 relative">
          <div className="block md:hidden">
            {click ? (
              <>
                <img
                  src={close}
                  alt="logo"
                  className="w-7"
                  onClick={() => setClick(!click)}
                />
                <div className="flex absolute top-[44px] items-start flex-col p-5 gap-5 text-xl justify-start z-50 h-screen w-full bg-slate-500">
                  <div className="hover:text-purple-500 cursor-pointer hover:underline">
                    Product
                  </div>
                  <div className="hover:text-purple-500 cursor-pointer hover:underline">
                    Resource
                  </div>
                  <div className="hover:text-purple-500 cursor-pointer hover:underline">
                    About
                  </div>
                  <div className="hover:text-purple-500 cursor-pointer hover:underline">
                    Pricing
                  </div>
                  <div className="gap-5 items-center flex justify-center flex-col">
                    <h2 className="cursor-pointer hover:font-semibold">
                      Login in
                    </h2>
                    <button className="bg-black text-white py-1 px-6 rounded-sm">
                      Sign up
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <img
                src={menu}
                alt="logo"
                className="w-7"
                onClick={() => setClick(!click)}
              />
            )}
          </div>

          <img src={Logo} alt="logo" className="w-7" />
          <h1 className="font-bold text-xl">Cloudmountain</h1>
        </li>
        <li className="gap-5 hidden md:flex">
          <div className="hover:text-purple-500 cursor-pointer hover:underline">
            Product
          </div>
          <div className="hover:text-purple-500 cursor-pointer hover:underline">
            Resource
          </div>
          <div className="hover:text-purple-500 cursor-pointer hover:underline">
            About
          </div>
          <div className="hover:text-purple-500 cursor-pointer hover:underline">
            Pricing
          </div>
        </li>
        <li className=" gap-5 items-center hidden md:flex">
          <h2 className="cursor-pointer hover:font-semibold">Login in</h2>
          <button className="bg-black text-white py-1 px-6 rounded-sm">
            Sign up
          </button>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
