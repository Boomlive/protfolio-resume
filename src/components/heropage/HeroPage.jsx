import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <>
      <div className=" mt-px grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-10 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            <div>Hello World,</div>
            <div>
              This is <span className="text-green-400">Panuwith Tumjoho</span>,
            </div>
            <div>I'm a Software Developer.</div>
          </h1>
          <p className="line-clamp-1 max-w-2xl mb-6 font-light tracking-tight text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Welcome to my digital domain! As a passionate Software Developer, I
            craft innovative solutions to tackle complex challenges. Explore my
            projects and witness the magic of code unfold
          </p>
          <a
            href="#contact"
            className="font-semibold inline-flex items-center justify-center px-5 py-3 text-base text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            CONTACT ME
          </a>
          <a
            href={process.env.URL_RESUME}
            className="font-semibold inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-gray-100 dark:focus:border-gray-700"
          >
            GET RESUME
            <Image
              width={22}
              height={30}
              src="/download-svg.svg"
              alt="contact-card"
              className="ml-2 "
            />
          </a>
        </div>
        <div className="flex flex-col md:mt-4 lg:mt-0 lg:col-span-6 shadow drop-shadow-lg p-10 rounded-lg">
          <code className="tracking-tight text-xs md:text-sm lg:text-base">
            <div className="">{"const coder = {"}</div>
            <div className="pl-10">{"name:'Panuwith Tumjoho',"}</div>
            <div className="pl-10">{"nickname:'Boom',"}</div>
            <div className="pl-10">
              {
                "skills:['React', 'NextJS', 'Vue', 'NuxtJS', 'Nodejs', 'Express', 'Postgresql', 'MongoDB', 'Postman']"
              }
            </div>
            <div>{"};"}</div>
          </code>
        </div>
      </div>
    </>
  );
};
export default HeroPage;
