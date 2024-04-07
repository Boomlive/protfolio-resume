import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <>
      <div
        id="education"
        className="max-w-screen-xl text-center py-8 font-extrabold text-4xl text-emerald-400"
      >
        EDUCATION
      </div>
      <div className="grid max-w-screen-xl py-8 mx-auto lg:py-8 lg:grid-cols-12">
        <div className="flex justify-center md:py-4 lg:col-span-7">
          <Image
            width={350}
            height={400}
            src="/education-svg.svg"
            alt="education_image"
          />
        </div>
        <div className="mt-4 lg:mt-0 lg:col-span-5">
          <div className="py-8 shadow drop-shadow-lg rounded-lg">
            <div className="font-semibold text-center pb-4">
              Bachelor's Degree
            </div>
            <div className="grid grid-cols-4">
              <div className="flex justify-center items-center col-span-1">
                <Image
                  width={45}
                  height={50}
                  src="/education-cap-svgrepo-com.svg"
                  alt="education-cap"
                />
              </div>
              <div className="col-span-3">
                <div className="font-semibold">
                  Thai-Nichi Institute of Technplogy
                </div>
                <div>Computer Engineering</div>
              </div>
            </div>
          </div>
          <div className="py-8 shadow drop-shadow-lg rounded-lg mt-4">
            <div className="font-semibold text-center pb-4">High School</div>
            <div className="grid grid-cols-4">
              <div className="flex justify-center items-center col-span-1">
                <Image
                  width={45}
                  height={50}
                  src="/education-cap-svgrepo-com.svg"
                  alt="education-cap"
                />
              </div>
              <div className="col-span-3">
                <div className="font-semibold">
                  Nawamintharachinuthit Bodindecha
                </div>
                <div>Science Math</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
