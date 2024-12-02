import React from "react";
import { getDataSertif } from "../data/datasertif";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";


class Sertifkat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: getDataSertif(),
        }
      }
      
      render(){
        
        const {data}  = this.state;
    


  return (
   
    <div class="container   mx-auto md:mt-8 p-8" id="sertifikat">
    <div class=" py-8  border-y border-gray-100 dark:border-gray-800  justify-center">
                   
                   <h3 class="text-center text-xs md:text-xl font-semibold text-gray-700 dark:text-white">Certifications & Licenses
                   </h3>
                   <p class="text-gray-700 mt-5 text-center md:mt-10 dark:text-slate-400"> Each certification demonstrates a commitment to continuous learning, 
                    professional growth, and adherence to industry standards. These credentials are recognized globally and serve as proof of proficiency 
                    in various IT domains, 
                    including software development, cloud computing, cybersecurity, and project management.
                    </p>
                   </div>

                   <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
    
      >
               {data.map((item) =>(
                
                  <SwiperSlide key={item.title} className="p-8">
                 <div class=" max-w-sm bg-white  hover:shadow-purple-950 shadow-2xl  mt-20 border-gray-200 md:mt-4 rounded-lg shadow dark:bg-gray-900">
                     <a href={item.link} >
                         <img class="rounded-t-lg hover:opacity-50" src={item.Image} alt="" />
                     </a>
                     <div class="p-5">
                             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                       
                         <p class="text-gray-500 text-bold text-xl dark:text-slate-500">By {item.Perusahaan}</p>

<p class="text-gray-500 py-5 mt-30  text-ml dark:text-slate-300">{item.deskripsi}</p>

                         <a href={item.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                             Link Certification
                              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                             </svg>
                         </a>
                     </div>
                 </div>
                 </SwiperSlide>
                      ))};
                     
                   
                      

</Swiper>
                   
            
    
                   </div>

       
       
  );
}
}

export default Sertifkat;
