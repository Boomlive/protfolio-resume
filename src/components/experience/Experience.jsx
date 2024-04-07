import React from "react";
import Image from "next/image";
function Experience() {
  return (
    <>
      <div
        id="experience"
        className=" max-w-screen-xl text-center py-8 font-extrabold text-4xl text-emerald-400"
      >
        EXPERIENCE
      </div>
      <div className="grid max-w-screen-xl py-8 mx-auto lg:py-8 lg:grid-cols-12">
        <div className="flex justify-center md:py-4 lg:col-span-7">
          <Image
            width={350}
            height={400}
            src="/developer-activity-svg.svg"
            alt="dev_image"
          />
        </div>
        <div className="mt-4 lg:mt-0 lg:col-span-5">
          <div className="py-8 shadow drop-shadow-lg rounded-lg">
            <div className="font-semibold text-center pb-4">
              Jan 2022 - Present
            </div>
            <div className="grid grid-cols-4">
              <div className="flex justify-center items-center col-span-1">
                <Image
                  width={40}
                  height={50}
                  src="/work-job-svg.svg"
                  alt="work_image"
                />
              </div>
              <div className="col-span-3">
                <div className="font-semibold">SELF EMPLOYED</div>
                <div>Code and build something in everyday.</div>
              </div>
            </div>
          </div>
          <div className="py-8 shadow drop-shadow-lg rounded-lg mt-4">
            <div className="font-semibold text-center pb-4">
              Sep 2020 - Dec 2020
            </div>
            <div className="grid grid-cols-4">
              <div className="flex justify-center items-center col-span-1">
                <Image
                  width={40}
                  height={50}
                  src="/work-job-svg.svg"
                  alt="work_image"
                />
              </div>
              <div className="col-span-3">
                <div className="font-semibold">INTERNSHIPS</div>
                <div>JL CONTROL CO.,LTD.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
