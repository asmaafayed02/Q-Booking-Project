import React from "react";
import {OurCoffee} from './ourCoffee'
import '../coffee.css'
export const Coffee =()=>{
    return( //our coffes section 
        <section  className=''>
              <div className= 'container'>
                <div className='text-center'>
                    <h2 className='py-2'>Our Coffes</h2>
                    <div className='d-flex justify-content-center'>
                    </div>
                    <p className=' px-12 py-6 text-black-50'>We believe in the goodness of real food, made from scratch. We source only the finest ingredients and hand-craft our baked goods daily.</p>
                </div>
               {/**coffes cards  */}
                <OurCoffee/>
                </div>
        </section>
  
    )
}