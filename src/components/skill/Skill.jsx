import React from "react";
import Image from "next/image";

function Skill() {
  return (
    <>
      <div
        id="skills"
        className="max-w-screen-xl text-center py-8 font-extrabold text-4xl text-emerald-400"
      >
        SKILLS
      </div>
      <div className="flex py-8 flex-wrap overflow-hidden justify-center items-center">
        <div className=" w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
          <Image
            width={70}
            height={70}
            src="/html-5-svgrepo-com.svg"
            alt="contact-card"
            className=""
          />
        </div>
        <div className=" w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
          <Image
            width={70}
            height={70}
            src="/css-3-svgrepo-com.svg"
            alt="contact-card"
            className=""
          />
        </div>
        <div className=" w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
          <Image
            width={70}
            height={70}
            src="/js-svgrepo-com.svg"
            alt="contact-card"
            className=""
          />
        </div>
        <div className=" w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
          <Image
            width={70}
            height={70}
            src="/react-svgrepo-com.svg"
            alt="contact-card"
            className=""
          />
        </div>
        <div className=" w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
          <Image
            width={70}
            height={70}
            src="/nextjs-svgrepo-com.svg"
            alt="contact-card"
            className=""
          />
        </div>
        <div className=" w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
          <Image
            width={70}
            height={70}
            src="/vue-svgrepo-com.svg"
            alt="contact-card"
            className=""
          />
        </div>
        <div className=" w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
          <Image
            width={70}
            height={70}
            src="/nuxt-svgrepo-com.svg"
            alt="contact-card"
            className=""
          />
        </div>
        <div className=" w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
          <Image
            width={70}
            height={70}
            src="/nodejs-svgrepo-com.svg"
            alt="contact-card"
            className=""
          />
        </div>
        <div className=" w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
          <Image
            width={70}
            height={70}
            src="/postgresql-logo-svgrepo-com.svg"
            alt="contact-card"
            className=""
          />
        </div>
        <div className=" w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
          <Image
            width={70}
            height={70}
            src="/mongodb-svgrepo-com.svg"
            alt="contact-card"
            className=""
          />
        </div>
        <div className=" w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
          <Image
            width={70}
            height={70}
            src="/postman-svgrepo-com.svg"
            alt="contact-card"
            className=""
          />
        </div>
      </div>
    </>
  );
}

export default Skill;
