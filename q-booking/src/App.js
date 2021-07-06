import { Route , Switch ,Redirect} from 'react-router';
import Navbar from './shared/navbar/navbar';
import Home from './components/home/home';
import {Coffee} from './components/rest/component/coffee/index'
import './App.css';
import { Resturant } from './components/rest/component/resturant/resturants';
import { Clinics } from './components/medical/component/clinic/clinins';
import { Hospitals } from './components/medical/component/hospital/hospitals';
import Sign from './components/sign/sign'
import Footer from './shared/footer/footer'
import About from './components/home/About/About';
import { PageNotFound } from './components/PageNotFound/pageNotFound';
import LogIn from './components/log-in/LogIn';
import SingleResPage from './components/rest/component/SingleRestPage/SingleRestPage';
import SingleCoffeePage from './components/rest/component/SingleCoffeePage/SingleCoffeePage';
 import SingleHospitalPage from './components/medical/component/SingleHospitalPage/SingleHospitalPage';
import SingleClinicPage from './components/medical/component/SingleClinicPage/SingleClinicPage ';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
            <Route path='/home' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/coffee' component={Coffee}/>
            <Route path='/resturant' component={Resturant}/>
            <Route path='/clinc' component={Clinics}/>
            <Route path='/Hospital' component={Hospitals}/>
            <Route path='/singlehospital' component={SingleHospitalPage}/>
            <Route path='/singleclinic' component={SingleClinicPage}/>
            <Route path='/singlerest' component={SingleResPage}/>
            <Route path='/singlecoffee' component={SingleCoffeePage}/>
            <Route path='/sign' component={Sign}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/notfound' component={PageNotFound}/>
            <Redirect to='/notfound/' />
            <Redirect from='/' to='/home' />

        </Switch>
      
        <Footer />
       
    </div>
  );
}

export default App;
