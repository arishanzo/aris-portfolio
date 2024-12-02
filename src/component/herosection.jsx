import React from "react";

function HeroSection () {

 return (
   <>
   <div class="relative" >
    <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
    </div>
        <div class="relative px-2 pt-10 md:pt-20 ">
            <div class="lg:w-2/3 text-center px-5 mx-auto">
                <h1 class="text-gray-900  dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Hello, I'am <span class="text-violet-600 dark:text-purple">Aris Wahyudi.</span></h1>
               
                <p class="mt-5 text-gray-700 dark:text-gray-600">Web Developer at Lamongan, East Java</p>
              
                <p class="mt-8 text-gray-700 dark:text-gray-300">I hold a Bachelor's degree in Informatics Engineering (Cum Laude) with one year of IT experience. I am dedicated, energetic, and enjoy challenges.</p>
                <div class="mt-10 mb-10 flex  justify-center gap-y-4 gap-x-6">
                    <a href="./pdf/cvaristerbaru.pdf" download="cv_ariswahyudi" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-purple-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                      <span class="relative text-base font-semibold text-white"
                        >GET CV</span>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=%2B6288805317354&text&type=phone_number&app_absent=0" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max" >
                        
                      <span
                        class="relative text-base font-semibold text-primary dark:text-white"
                        >HIRE ME </span
                      >
                    </a>
                </div>
               </div>
               </div>
               
             
   </div>
   <div class=" py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-center">
                   
                        <h6 class="text-center text-xs md:text-lg font-semibold text-gray-700 dark:text-white">Get a Certificate from the Institution / Company below:</h6>
                        </div>
   <div class="p-10 grid grid-cols-4 sm:grid-cols-4 md:grid-2 ">
                <div class="p-4 grayscale-0 transition duration-200 ">
                    <img src="./images/icon/google.svg" class="h-7 md:h-10 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                  </div>
                <div class="p-4 grayscale-0 transition duration-200 ">
                <img src="./images/icon/googlecloud.svg" class="h-7 md:h-10 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
                <div class="p-4 flex grayscale-0 transition duration-200 hover:grayscale-0">
                <img src="./images/icon/dicoding.svg" class="h-7 md:h-10 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
                <div class="p-4 grayscale-0 transition duration-200 ">
                <img src="./images/icon/kominfo.svg" class="h-7 md:h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
                 
              </div>
             
</>

  );

}

export default HeroSection;
