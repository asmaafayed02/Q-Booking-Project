// import React, { useState, useEffect} from 'react';
// import axios from 'axios';
// import './MedicalInfo.css'
// import { propTypes } from 'react-bootstrap/esm/Image';
//  const MedicalInfo =(props)=>{
//     const [isLoaded , setLoaded] = useState(false);
//     const [error , setError] = useState(null);
//     const [OurClinics , setOurClinics] = useState();
  
//     useEffect(()=>{
//       axios({
//           method:'GET',
//           url: "http://localhost:3000/Clinics"
//       }).then(response =>{
//          console.log(response.data)
//           setOurClinics(response.data)
//           setLoaded(true) 
//      })
//      .catch(error =>{
//       setLoaded(true)
//       setError(error)
//    })
//     }, [])
  
//     if(error){//handling error
//       return <div>Error: {error.message}</div>
  
//       }else if(!isLoaded){//handling loading
//           return <div className='fw-bold text-center shadow-lg m-4 p-5 border'>Loading...</div>
  
//       }else{ 
//           const clinic = (OurClinics.filter((clinicItem) =>(clinicItem.clinic_id===parseInt(props.match.params.id))));
// console.log(clinic)
        

import React, { Component } from 'react';
import './ClinicInfo.css'
import {Link} from 'react-router-dom'
class ClinicInfo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='container' >
                <div className='clinicInfo'>
                    <h3>We Care Dental Clinic - Nasr City</h3>
                    <h5><i className= "fas fa-map-marker-alt location" ></i> Abbas Elakad - Nasr City </h5>
                    <p>lorem ipsum dolor sit amet, ea doming until epicuri iudicabit name, te usu virtute placeratpurto brute disputando cu est ea doming until epicuri iudicabit name, te usu virtute placeratpurto brute disputando cu est
                    lorem ipsum dolor sit amet, ea doming until epicuri iudicabit name, te usu virtute placeratpurto brute disputando cu est ea doming</p>

                                <div className='icons'>
                                    <i className='fab fa-facebook-f facebook'></i>
                                    <i className='fab fa-instagram'></i>
                                </div>

                                <div className='comment'>
                                    <h5>Have you any comment!</h5>
                                    <input type='text' placeholder='Add Any Comment Or Reveiw' />
                                    <button className='adding-review'>Submit</button>
                                </div>

                                <div className='signUp-button'>
                                    <Link to='login' className='reg-button' >Register Now!</Link>
                                </div>
                            </div>
                
                
            
    
                
            </div>
         );
    }
}
 
export default ClinicInfo;
