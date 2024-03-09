import React from "react";
import Bg from "../assets/bg.png";
function Home() {
  return (
    <div className="px-5">
      <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-cuprum w-1/2 mt-5 leading-snug mb-5">
        Secure cloud-native infrastructure with Cloudmountain
      </h1>
      <div className="relative">
        <img src={Bg} alt="bg" className="h-[350px] w-full block" />
        <div className="absolute right-0 sm:right-10 top-28 gap-6 flex items-center small_mobile:items-start flex-col justify-center">
          <p className="text-white w-full small_mobile:w-72 text-center small_mobile:text-left p-5 small_mobile:p-0">
            With cloud-native security integrated into your application design,
            you can develop rapidly and innovate continously.
          </p>
          <button className="bg-white py-1 px-6 rounded-sm font-semibold">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
