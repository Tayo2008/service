import React from "react";
import GlobalStyles from "./GlobalStyles";
import ImageSlide from "./ImageSlide";
import Image2 from "../Image/2.jpg";
import Image3 from "../Image/3.jpg";
import Image4 from "../Image/4.jpg";
import { Link } from "react-router-dom";

const BackData = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <ImageSlide images={[Image2, Image3, Image4]}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <div class=" md:pl-6">
              <h2 class=" text-3xl uppercase text-white py-4 font-medium title-font mb-2">
                Consulting
              </h2>
              <p class="leading-relaxed pb-4 text-base">
                We have been making life easier for small to big business Owners
                and IT Managers by eliminating technical problems...
              </p>
              <div class="flex md:mt-4 mt-6">
                <button class="inline-flex text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  <Link to="/details">Click Here</Link>
                </button>
              </div>
            </div>
          </div>
        </ImageSlide>

        <section class="text-gray-600 py-24 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Raclette Blueberry Nextious Level
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <a class="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Ennui Snackwave Thundercats
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <a class="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Selvage Poke Waistcoat Godard
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <a class="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BackData;
