import React from "react";
import {OurResturant} from './ourResturants'
import '../coffee.css'
export const Resturant =()=>{
    return( //our coffes section 
        <section  className='mt-4'>
              <div className= 'container'>
                <div className='text-center'>
                    <h2 className='pb-2'>Our Resturants</h2>
                    <div className='d-flex justify-content-center'>
                    <hr className='border w-50'/>
                    </div>
                    <p className=' px-12 py-6 text-black-50'>We believe in the goodness of real food, made from scratch. We source only the finest ingredients and hand-craft our baked goods daily.</p>
                </div>
               {/**coffes cards  */}
                <OurResturant/>
               
                </div>
        </section>
  
    )
}