import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../coffee.css';
import { Link } from 'react-router-dom';
export const OurCoffee =()=>{
  const [isLoaded , setLoaded] = useState(false);
  const [error , setError] = useState(null);
  const [ourCoffee , setOurCoffes] = useState();

  useEffect(()=>{
    axios({
        method:'GET',
        url: "http://localhost:3000/Coffes"
    }).then(response =>{
       console.log(response.data)
        setOurCoffes(response.data)
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
            {ourCoffee.map(coffeeItem =>{
                return(//maping to show our data
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6" key={coffeeItem.Coffe_id}>
                            <div className="card h-100 shadow bg-body rounded border-0 coffe-card">
                                <div className='card-coffeImage h-50'>
                                <img src={coffeeItem.Coffe_icon} className="card-img-top h-100 " alt="Coffe shop"/>
                                </div>
                                <div className="card-body">
                                  <h5 className="card-title">{coffeeItem.Coffe_title}</h5>
                                  <p className="card-text text-black-50">{coffeeItem.Coffe_description}</p> 
                                  {/**buttom to learn more about coffee*/}
                                  <Link to='/singlecoffee' id='rest-more' className='btn mt-2'>
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
