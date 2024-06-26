import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div
        id="about"
        className="grid max-w-screen-xl py-8 lg:gap-10 xl:gap-10 lg:py-8 lg:grid-cols-12"
      >
        <div className="order-2 lg:order-1 md:py-4 mr-auto place-self-center mt-4 lg:mt-0 lg:col-span-6 tracking-tight  ">
          <h1 className="font-semibold text-4xl text-emerald-400">I AM</h1>
          My name is Panuwith Tumjoho. I am a professional and enthusiastic
          programmer in my daily life. I am a quick learner with a self-learning
          attitude. I love to learn and explore new technologies and am
          passionate about problem-solving. I love almost all the stacks of web
          application development and love to make the web more open to the
          world. My core skill is based on JavaScript and I love to do most of
          the things using JavaScript. I am available for any kind of job
          opportunity that suits my skills and interests.
        </div>
        <div className="flex justify-center order-1 lg:order-2 lg:col-span-6">
          <Image
            src="/person_img.jpg"
            width={220}
            height={250}
            alt="Picture of the author"
            className=" rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
