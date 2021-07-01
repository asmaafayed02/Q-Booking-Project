import React, { Component } from 'react';
import AllFounders from './AllFounders'

class IndividualFounder extends Component {
    state = { 
            nameOfFounders : [
                {id : 1 ,
                 imgSrc : "../ImgFounders/Esraa.jpeg" ,
                 Name : "Esraa Elshibly" ,
                 githubLink: 'https://github.com/EsraaElshibly' ,
                 linkedInLink : 'https:www.linkedin.com/in/esraa-elshibly-2172001aa'
                } ,
    
                {id : 2 ,
                    imgSrc : "../ImgFounders/Asmaa.jpeg" ,
                    Name : "Asmaa Fayed" ,
                    githubLink:'https://github.com/asmaafayed02' ,
                    linkedInLink : 'https:www.linkedin.com/in/asmaa-fayed-51b4b917b'
                } ,
    
                {id : 3 ,
                    imgSrc : "../ImgFounders/Alaa.jpeg" ,
                    Name : "Alaa Hussien" ,
                    githubLink:'https://github.com/alaahussein22' ,
                    linkedInLink : 'https:www.linkedin.com/in/alaa-hussein-00670019a'
                },   
         ]
    
     }
    render() { 
        return ( 
            <div className='container'>
                <AllFounders foundersInfo={this.state.nameOfFounders} />
            </div>
         );
    }
}
 
export default IndividualFounder;