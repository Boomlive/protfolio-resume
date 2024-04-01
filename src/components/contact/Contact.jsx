import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <>
      <div
        id="contact"
        className=" max-w-screen-xl text-center py-8 font-extrabold text-4xl text-green-400"
      >
        CONTACT
      </div>
      <div className="grid max-w-screen-xl py-8 lg:py-8 lg:grid-cols-12">
        <div className="col-span-5">
          <h2 className="mb-4 text-2xl tracking-tight font-semibold text-center text-gray-900 dark:text-white">
            CONTACT WITH ME
          </h2>
          <p className="mb-4 font-light text-center tracking-tight text-gray-500 dark:text-gray-400 ">
            If you have any questions or concerns, please don't hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests.
          </p>
          <form action="#" className="flex flex-col gap-4">
            <div>
              <label
                for="email"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Subject"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                class="flex gap-1 items-center justify-center uppercase rounded-full px-5 md:px-12 py-1 md:py-2 tracking-wider font-semibold transition-all duration-200 ease-out text-gray-900 border border-gray-300 hover:border-green-400 hover:gap-3 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Send message
                <Image
                  width={45}
                  height={50}
                  src="/message-moving-svgrepo-com.svg"
                  alt="message-moving"
                />
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-7 flex flex-col gap-4 lg:px-16 justify-center mt-5 lg:mt-0">
          <div className="flex items-center gap-2">
            <Image
              width={60}
              height={50}
              src="/email-svgrepo.svg"
              alt="email-icon"
            />
            <div>Boomlivecup@gmail.com</div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              width={60}
              height={50}
              src="/phone-svgrepo-com.svg"
              alt="phone-icon"
            />
            <div>+66 89-762-1542</div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              width={60}
              height={50}
              src="/location-svgrepo-com.svg"
              alt="location-icon"
            />
            <div>43 Soi LatPhraoWangHin 6 Sub-area/District Lat Phrao</div>
          </div>
          <div className="flex justify-center items-center gap-7 mt-5">
            <a href="https://github.com/Boomlive">
              <Image
                width={50}
                height={50}
                src="/github-svgrepo-com.svg"
                alt="github-icon"
              />
            </a>
            <a href="https://www.facebook.com/panuwith.boom/">
              <Image
                width={50}
                height={50}
                src="/facebook-svgrepo-com.svg"
                alt="facebook-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
