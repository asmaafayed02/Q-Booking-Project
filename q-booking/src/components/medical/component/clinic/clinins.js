import React from "react";
import {OurClinics} from './ourClinics'
import '../medical.css'
export const Clinics =()=>{
    return( //our clinic section 
        <section  className=''>
              <div className= 'container'>
                <div className='text-center'>
                    <h2 className='pt-4'>Our Clinics</h2>
                    <div className='d-flex justify-content-center'>
                    <hr className='border w-50'/>
                    </div>
                    <p className=' px-12 py-6 text-black-50'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                </div>
               {/**clinics cards  */}
                <OurClinics/>
                
                </div>
        </section>
  
    )
}