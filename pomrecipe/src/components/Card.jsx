import React from "react";

const card = (props) => {
  const {id,name,image,description,level} =props.data
  return (
    <>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-10">
        <div>
          {/* Card 1 */}
          <div class="rounded overflow-hidden shadow-lg">
            <a href="#"></a>
            <div class="relative">
              <a href="#">
                <img
                  class="w-full h-60"
                  src={image}
                  alt="Sunset in the mountains"
                />
                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div class="absolute bottom-0 left-0 rounded-full bg-gray-800 px-3 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  {level}
                </div>
              </a>

              <a href="!#">
                
              </a>
            </div>
            <div class="px-6 py-4">
              <a
                href="#"
                class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                {name}
              </a>
              <p class="text-gray-500 text-sm">{description}</p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
              <span
                href="#"
                class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <svg
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xml:space="preserve"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.16,4.61A6.27,6.27,0,0,0,12,4a6.27,6.27,0,0,0-8.16,9.48l7.45,7.45a1,1,0,0,0,1.42,0l7.45-7.45A6.27,6.27,0,0,0,20.16,4.61Zm-1.41,7.46L12,18.81,5.25,12.07a4.28,4.28,0,0,1,3-7.3,4.25,4.25,0,0,1,3,1.25,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,6.05Z"
                      fill="#6563ff"
                    />
                  </svg>
                </svg>
                <span class="ml-1"></span>
              </span>
            </div>
          </div>
          {/* Continue with other cards... */}
        </div>
      </div>
    </>
  );
};

export default card;
