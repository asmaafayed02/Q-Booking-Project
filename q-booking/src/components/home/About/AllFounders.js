import React, { Component } from 'react';
import './About.css'

class AllFounders extends Component {
    state = {  }
    render() { 
        let {foundersInfo} = this.props ;

        let founders = foundersInfo.map ( founderInforamation => {
            return (
                <div className="founders ">
                    <div className='container '>
                        <div className="col-12 each-founder">
                            <div className="founder-image">
                                <img src={founderInforamation.imgSrc} title="Pic for Each Founder" alt="Founder photo" />
                            </div>

                            <div className="founder-information">
                                <h4> {founderInforamation.Name} </h4>
                                
                                <a className='founders-social' href={founderInforamation.githubLink}>
                                    <i className='fab fa-linkedin'> </i>  
                                </a>
                                
                                <a href={founderInforamation.githubLink}>
                                    <i className='fab fa-github'> </i> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
         );
    }
)
    return (
        <div className="row show-best">
            {founders}
        </div>
    )
}
}
 
export default AllFounders;