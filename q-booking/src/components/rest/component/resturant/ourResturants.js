import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../coffee.css';
import { Link } from 'react-router-dom';
export const OurResturant =()=>{
  const [isLoaded , setLoaded] = useState(false);
  const [error , setError] = useState(null);
  const [ourResturant , setOurResturant] = useState();

  useEffect(()=>{
    axios({
        method:'GET',
        url: " F:\my projects\Q-Booking-Project\q-booking\api\items\read.php"
    }).then(response =>{
       console.log(response.data)
        setOurResturant(response.data)
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
        return <div className='text-center shadow-lg border m-4 p-5 '>Loading...</div>

    }else{
    return (//maping to show our data
        <div className="row row-cols-1 row-cols-md-4 ">
            {ourResturant.map(resturantItem =>{
                return(//maping to show our data
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6" key={resturantItem.Resturant_id}>
                            <div className="card h-100 shadow bg-body rounded border-0 Resturant-card">
                                <div className='card-ResturantImage h-50'>
                                <img src={resturantItem.Resturant_icon} className="card-img-top h-100 " alt="Resturant shop"/>
                                </div>
                                <div className="card-body">
                                  <h5 className="card-title">{resturantItem.Resturant_title}</h5>
                                  <p className="card-text text-black-50">{resturantItem.Resturant_description}</p>
                                   {/**buttom to learn more about resturant*/}
                                   <Link to='/singlerest' id='rest-more' className='btn mt-2'>
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
