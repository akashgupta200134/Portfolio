import React from 'react'
import health from "../images/health.png"
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Projects = () => {
  return (
<div>
 <div className='mt-20'>
      <p className=' text-5xl font-bold  text-white text-center'>
        WEB DEVELOPMENT PROJECTS
      </p>
        <div className=' grid md:grid-cols-3 gap-4 items-center justify-center mt-20 ml-[84px]'>
            
            <div className=' border h-[500px] w-[300px]  mb-4  rounded-xl' > 
            <img src={health} className=' mt-4 rounded-xl h-52 w-[280px] ml-[9px]' />
        
            <p className=' text-xl font-bold text-white text-center mt-4 '>
              Arogya Sahayak
            </p>
            <p  className=' text-md font-normal text-start text-white ml-3 mt-4'>
            Crafted with ReactJS, Tailwind CSS, Firebse and Node.js, our healthcare website delivers a seamless and responsive user experience. Backed by Firebase...
            </p>
               <Link to="https://arogyasahayak.vercel.app/">
                  <button className='bg-white text-center font-semibold text-md border h-12 w-64 ml-5 mt-6 rounded-2xl '>
                Visit Site
               </button>
               </Link>
            
            </div>

            <div className=' border h-[500px] w-[300px]  mb-4 rounded-xl ' > 
            <img src={health} className=' mt-4 rounded-xl h-52 w-[280px] ml-[9px]' />
        
            <p className=' text-xl font-bold text-white text-center mt-4 '>
              Arogya Sahayak
            </p>
            <p  className=' text-md font-normal text-start text-white ml-3 mt-4'>
            Crafted with ReactJS, Tailwind CSS, Firebse and Node.js, our healthcare website delivers a seamless and responsive user experience. Backed by Firebase...
            </p>
               
            <Link to="https://arogyasahayak.vercel.app/">
                  <button className='bg-white text-center font-semibold text-md border h-12 w-64 ml-5 mt-6 rounded-2xl '>
                Visit Site
               </button>
               </Link>
            </div>


            <div className=' border h-[500px] w-[300px]  mb-4 rounded-xl ' > 
            <img src={health} className=' mt-4 rounded-xl h-52 w-[280px] ml-[9px]' />
        
            <p className=' text-xl font-bold text-white text-center mt-4 '>
              Arogya Sahayak
            </p>
            <p  className=' text-md font-normal text-start text-white ml-3 mt-4'>
            Crafted with ReactJS, Tailwind CSS, Firebse and Node.js, our healthcare website delivers a seamless and responsive user experience. Backed by Firebase...
            </p>
               
            <Link to="https://arogyasahayak.vercel.app/">
                  <button className='bg-white text-center font-semibold text-md border h-12 w-64 ml-5 mt-6 rounded-2xl '>
                Visit Site
               </button>
               </Link>
            </div>











    </div>



    </div>

        <Footer></Footer>
</div>
   
  
  )
}

export default Projects