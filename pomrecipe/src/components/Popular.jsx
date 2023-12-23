import React from 'react';

const Popular = () => {
  return (
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div class="rounded overflow-hidden shadow-lg">
          <a href="#"></a>
          <div class="relative">
            <a href="#">
              <img
                class="w-full"
                src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                alt="Sunset in the mountains"
              />
              <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Photos
              </div>
            </a>

            <a href="!#">
              <div class="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                <span class="font-bold">27</span>
                <small>March</small>
              </div>
            </a>
          </div>
          <div class="px-6 py-4">
            <a href="#" class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
              Best View in Newyork City
            </a>
            <p class="text-gray-500 text-sm">The city that never sleeps</p>
          </div>
          <div class="px-6 py-4 flex flex-row items-center">
            <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
              <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xml:space="preserve">
                <g>
                  <g>
                    <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                  </g>
                </g>
              </svg>
              <span class="ml-1">6 mins ago</span>
            </span>
          </div>
        </div>
        {/* Continue with other cards... */}
      </div>
    </div>
  );
};

export default Popular;
