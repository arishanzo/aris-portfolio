import React from "react";
import { getDataPortfolioWeb } from "../data/dataportfolio";

class Portfolio extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: getDataPortfolioWeb(),
      }
    }
    
    render(){
      
      const {data}  = this.state;

  return (
   
  
    <div class="container mx-auto w-50 h-50 py-10" id="portfolio">
        <div class=" py-8  border-y border-gray-100 dark:border-gray-800  justify-center">
                   
                   <h3 class="text-center text-xs md:text-xl font-semibold text-gray-700 dark:text-white">Portfolio
                   </h3>
                   <p class="text-gray-700 mt-5 text-center  dark:text-slate-400">My Project Website / Aplication
                    </p>
                   </div>

                   
           <div id="main" class="m-8 md:grid grid-cols-3 gap-3 justify-evenly"> 

           {data.map((item) =>(
<div class=" bg-gray-200 dark:bg-gray-900 flex flex-wrap items-center justify-center">
  <div class="container max-w-lg bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
    <div class="h-2/4 sm:h-64 overflow-hidden">
      <img class="w-full rounded-t"
        src={item.Image}
        alt="Photo by aldi sigun on Unsplash" />
    </div>
    <div class="flex  justify-start px-5 -mt-12 mb-5">
      <span clspanss="block bg-dark-950  h-32 w-32">
        <img alt="Photo by aldi sigun on Unsplash"
          src={item.icon}
          class="mx-auto object-cover shrink-0   rounded-md h-24 w-24 bg-dark-950 shadow-neutral-950 shadow-xl  p-3" />
      </span>
    </div>
    <div class="">
      <div class="px-7 mb-8">
        <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">{item.title}</h2>
       
        <p class="mt-6 mb-8 text-gray-600 dark:text-gray-500">{item.deskripsi}</p>
        {/* <div
          class="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
          bethgreene@gmail.com
        </div> */}
         <a href={item.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-purple-700 dark:text-gray-300 dark:hover:bg-purple-600 dark:hover:text-gray-200">
                             Link Github
                              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                             </svg>
                         </a>
        <div class="flex  justify-center gap-2 sm:gap-4 mt-8">
        <div
          class="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
          {item.Bahasa1}
        </div>
        <div
          class="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
          {item.Bahasa2}
        </div>
        <div
          class="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
          {item.Bahasa3}
        </div>
         
        </div>
      </div>
</div>
</div>
</div>

))};




            </div>
        </div>
   

  );
}
}

export default Portfolio;
