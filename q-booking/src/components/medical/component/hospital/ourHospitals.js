import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../medical.css';
import { Link } from 'react-router-dom';
export const OurHospitals =()=>{
  const [isLoaded , setLoaded] = useState(false);
  const [error , setError] = useState(null);
  const [OurHospitals , setOurHospitals] = useState();

  useEffect(()=>{
    axios({
        method:'GET',
        url: "F:\my projects\Q-Booking-Project\q-booking\api\items"
    }).then(response =>{
       console.log(response.data)
        setOurHospitals(response.data)
        setLoaded(true) 
   })
   .catch(error =>{
    setLoaded(true)
    setError(error)
 })
  }, [])

  if(error){//handling error
    return <div>Error: {error.message}</div>

    }else if(!isLoaded){//handling loading
        return <div className='fw-bold text-center shadow-lg m-4 p-5 border'>Loading...</div>

    }else{
    return (//maping to show our data
        <div className="row row-cols-1 row-cols-md-4 ">
            {OurHospitals.map(hospitalItem =>{
                return(//maping to show our data
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6" key={hospitalItem.hospital_id}>
                            <div className="card h-100 shadow bg-body rounded border-0 hospital-card">
                                <div className='card-hospitalImage h-50'>
                                <img src={hospitalItem.hospital_icon} className="card-img-top h-100 " alt="hospital shop"/>
                                </div>
                                <div className="card-body">
                                  <h5 className="card-title">{hospitalItem.hospital_title}</h5>
                                  <p className="card-text text-black-50">{hospitalItem.hospital_description}</p>
                                   {/**buttom to learn more about hospital*/}
                                   <Link to='/singlehospital' id='medical-more' className='btn mt-2'>
                                       Explore...
                                  </Link>
                                </div>
                            </div>
                        </div>
                    
                
                )
            })}
        </div>
      );
}
}
