import React from "react";
import {OurHospitals} from './ourHospitals'
import '../medical.css'
export const Hospitals =()=>{
    return( //our hospital section 
        <section  className='p-4'>
              <div className= 'container'>
                <div className='text-center'>
                    <h2 className='pt-4'>Our Hospitals</h2>
                    <div className='d-flex justify-content-center'>
                    </div>
                    <p className=' px-12 py-6 text-black-50'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                </div>
               {/**hospital cards  */}
                <OurHospitals/>
             
                </div>
        </section>
  
    )
}