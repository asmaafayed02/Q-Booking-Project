import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='footer '> {/* Start Footer */}
                {/* Start div row For Responsive */}
                <div className=' container row'> 
                    {/* Start div for footer logo */}
                    <div className='footer-logo col-md-4 col-12'> 
                        <h1><span>Q-</span>Booking</h1>
                    </div> 
                    {/* End div for footer logo */}

                    {/* Start div for footer links */}
                    <div class="main col-md-4 col-12"> 
                        <h3>QUICKLINKS</h3> 
                        <ul>
                            <li> <a href='#'> Home </a>  </li> 
                            <li><a href='#'> About </a>  </li>
                            <li> <a href='#'> Services </a>  </li> 
                            <li> <a href='#'> Medical </a>  </li> 
                            <li> <a href='#'> Contact </a> </li> 
                        </ul>
                    </div> 
                    {/* End div for footer links */}
    
                    {/* Start div for Social footer links */}
                    <div class="social col-md-4 col-12">
                        <h3>Get Social</h3>
                        <p> Aenean leo ligula, porttitor eu, consequat <br />
                            vitae, eleifend ac, enim. Aliquam lorem ante.</p>
                    
                        <ul>
                            <li><a href='#'> <i class="fab fa-facebook-square"></i> </a></li>
                            <li><a href='#'> <i class="fab fa-twitter"></i> </a> </li>
                            <li><a href='#'> <i class="fab fa-linkedin"></i> </a></li>
                            <li><a href='#'> <i class="fab fa-youtube"></i> </a></li>
                            <li><a href='#'> <i class="fab fa-behance-square"></i> </a></li>
                        </ul>

                    </div>
                    {/* End div for Social footer links */}
                </div> 
                {/* End div row For Responsive */}
            </div> 
         );
    }
}
 
export default Footer;