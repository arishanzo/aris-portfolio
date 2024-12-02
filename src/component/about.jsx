import React from "react";

function About () {


  return (
   
  
    <div class="container mx-auto py-10" id="about">
        <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
                <div class="bg-dark-950 shadow-xl shadow-neutral-950 rounded-lg p-6">
                    <div class="flex flex-col items-center">
                    <span class="relative flex w-32 h-32 mb-4">
                    <img src="./photo/foto.png" class=" bg-gray-300 flex rounded-full shrink-0"/>
                    <span class="animate-ping w-15 h-15 absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-30"></span>
                  
                    </span>
                        
                        <h1 class="text-xl text-center dark:text-gray-200 font-bold">Aris Wahyudi</h1>
                        <p class="text-gray-700 text-center dark:text-gray-600">Web Developer & Graphic Designer</p>
                        <div class="mt-6 flex flex-wrap gap-4 justify-center">
                        <a href="https://api.whatsapp.com/send/?phone=088805317354&text&type=phone_number&app_absent=0" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-purple-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                      <span class="relative text-base font-semibold text-white"
                        >Contact Me</span>
                    </a>      </div>
                    </div>
                 
                    <div class="flex flex-col mt-10">
                        <span class="text-gray-700 dark:text-gray-500 uppercase font-bold tracking-wider mb-2 text-center">Skills</span>
                       
                        <div class="p-8 grid grid-cols-4 sm:grid-cols-4 md:grid-2 ">
                <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
                    <img src="./images/icon/laravel.svg" class="animate-spin hover:animate-none h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                  </div>
                <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/icon/codeigniter.svg" class="animate-spin hover:animate-none h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
                <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/icon/reactts.svg" class="animate-spin hover:animate-noneh-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
                <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/icon/vite.svg" class="animate-spin hover:animate-none h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
                <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/icon/css.svg" class="animate-spin hover:animate-none h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
              
                <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/icon/git.svg" class="animate-spin hover:animate-none h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>

                <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/icon/html.svg" class="animate-spin hover:animate-none h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>

                <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/icon/api.svg" class="animate-spin hover:animate-none h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>


                <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/icon/photoshop.svg" class="animate-spin hover:animate-none h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
                <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/icon/figma.svg" class="animate-spin hover:animate-none h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
                <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/icon/javascript.svg" class="animate-spin hover:animate-none h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>

                <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/icon/db.svg" class="animate-spin hover:animate-none h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
              </div>
                    </div>
                </div>
            </div>
            <div class="col-span-4 sm:col-span-9 ">
                <div class="bbg-dark-950 shadow-xl shadow-neutral-950   shadow rounded-lg p-6">
                    <h2 class="text-xl text-white dark:text-dark md:text-white dark:text-dark font-bold mb-4">About Me</h2>
                    <p class="text-gray-700 dark:text-slate-400">I am a graduate with a Bachelor's degree in Informatics Engineering. During my studies, 
                        I actively participated in various IT-based training programs, which led me to graduate with honors (Cum Laude).
                         I have approximately one year of work experience in the IT field. I tend to enjoy challenges, possess high energy,
                          and am highly dedicated to my work.
                    </p>

           </div>
                    <div class="bbg-dark-950 shadow-xl shadow-neutral-950 shadow rounded-lg p-6">
                    <h2 class="text-xl text-white font-bold mt-6 mb-4">Experience</h2>
                    
    <div class="flex mt-10">
        
        <div class="mr-4 flex flex-col items-center">
            
            <div>
                <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-900"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="h-6 w-6 text-blue-800 dark:text-slate-200">
                        <path d="M12 5l0 14"></path>
                        <path d="M18 13l-6 6"></path>
                        <path d="M6 13l6 6"></path>
                    </svg></div>
            </div>
            <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
        </div>
        <div class="pt-1 pb-8">
            <p class="mb-2 text-xl font-bold text-gray-200 dark:text-slate-100">Impro Studio </p>     
            <p class="mb-2 text-xl font-bold text-gray-200 dark:text-slate-500"> Graphic Designer at Lamongan, East Java</p>
            <p class="text-gray-500 text-xs dark:text-slate-600">May 2023 - Augtus 2024</p>

            <p class="text-gray-500 py-5 mt-30  text-ml dark:text-slate-500">Collaborating with a team to develop innovative designs.
                 Creating customizable templates using platforms like Canva and Venngage. Continuously researching and analyzing 
                 design trends through resources such as Envato, Canva, and Pinterest to ensure designs remain modern, user-friendly, 
                and aligned with market demands, enhancing creativity and adaptability in various design projects.</p>
        </div>
    </div>

    <div class="flex">
        <div class="mr-4 flex flex-col items-center">
            <div>
                <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-900"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="h-6 w-6 text-blue-800 dark:text-slate-200">
                        <path d="M12 5l0 14"></path>
                        <path d="M18 13l-6 6"></path>
                        <path d="M6 13l6 6"></path>
                    </svg></div>
            </div>
            <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
        </div>
        <div class="pt-1 pb-8">
        <p class="mb-2 text-xl font-bold text-gray-200 dark:text-slate-100">CV. Caraka Abadi </p>     
            <p class="mb-2 text-xl font-bold text-gray-200 dark:text-slate-500"> Web Developer at Malang, East Java</p>
            <p class="text-gray-500 text-xs dark:text-slate-600">February 2023 - May 2023</p>

            <p class="text-gray-500 py-5 mt-30  text-ml dark:text-slate-500">Developing a warehouse inventory management application using PHP, 
                JavaScript, CodeIgniter,and PostgreSQL to optimize stock management, streamline item tracking, 
                and generate real-time inventory reports.</p>
     </div>
    </div>


    <div class="flex">
        <div class="mr-4 flex flex-col items-center">
            <div>
                <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-900"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="h-6 w-6 text-blue-800 dark:text-slate-200">
                        <path d="M12 5l0 14"></path>
                        <path d="M18 13l-6 6"></path>
                        <path d="M6 13l6 6"></path>
                    </svg></div>
            </div>
            <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
        </div>
        <div class="pt-1 pb-8">
        <p class="mb-2 text-xl font-bold text-gray-200 dark:text-slate-100">Silmi Fashion </p>     
            <p class="mb-2 text-xl font-bold text-gray-200 dark:text-slate-500"> IT Staff at Lamongan, East Java</p>
            <p class="text-gray-500 text-xs dark:text-slate-600">December 2022 - April 2023</p>

            <p class="text-gray-500 py-5 mt-30  text-ml dark:text-slate-500">Developing a web-based payroll application to support the company's 
                financial administration processes, as well as identifying, analyzing, 
                and resolving internet network issues effectively whenever disruptions occur to ensure smooth system operations</p>
        </div>
    </div>
    </div>
                </div>
            </div>
        </div>
   

  );
}

export default About;
