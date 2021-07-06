import './footer.css';
import { Link } from 'react-router-dom';

const Footer =()=> {
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
                    <div className="main col-md-4 col-12"> 
                        <h3>QUICKLINKS</h3> 
                        <ul>
                            <li> <Link to='/'> Home </Link>  </li> 
                            <li><Link to='/about'> About </Link>  </li>
                            <li> <Link to='/'> Services </Link>  </li> 
                            <li> <Link to='#'> Medical </Link>  </li> 
                            <li> <Link to='/login'> Login </Link> </li> 
                        </ul>
                    </div> 
                    {/* End div for footer links */}
    
                    {/* Start div for Social footer links */}
                    <div className="social col-md-4 col-12">
                        <h3>Get Social</h3>
                        <p> Aenean leo ligula, porttitor eu, consequat <br />
                            vitae, eleifend ac, enim. Aliquam lorem ante.</p>
                    
                        <ul>
                            <li><a href='https://www.facebook.com/'> <i className="fab fa-facebook-square"></i> </a></li>
                            <li><a href='https://twitter.com/?lang=en'> <i className="fab fa-twitter"></i> </a> </li>
                            <li><a href='https://www.linkedin.com/'> <i className="fab fa-linkedin"></i> </a></li>
                            <li><a href='https://www.youtube.com/'> <i className="fab fa-youtube"></i> </a></li>
                            <li><a href='https://www.behance.net/'> <i className="fab fa-behance-square"></i> </a></li>
                        </ul>

                    </div>
                    {/* End div for Social footer links */}
                </div> 
                {/* End div row For Responsive */}
            </div> 
         );
    }

 
export default Footer;