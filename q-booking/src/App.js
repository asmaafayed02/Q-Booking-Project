import { Route , Switch ,Redirect} from 'react-router';
import Navbar from './shared/navbar/navbar';
import Home from './components/home/home';
import {Coffee} from './components/rest/component/coffee/index'
import './App.css';
import { Resturant } from './components/rest/component/resturant/resturants';
import { Clinics } from './components/medical/component/clinic/clinins';
import { Hospitals } from './components/medical/component/hospital/hospitals';
import Sign from './components/sign/sign'
import SingleResPage from './components/rest/SingleRestPage/SingleRestPage'
import SingleMedicalPage from './components/medical/SingleMedicalPage/SingleMedicalPage'
import Footer from './shared/footer/footer'
import About from './components/home/About/About';
import { PageNotFound } from './components/PageNotFound/pageNotFound';
// import MedicalInfo from './components/medical/SingleMedicalPage/MedicalInfo';


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
            <Route path='/medical' component={SingleMedicalPage}/>
            <Route path='/rest' component={SingleResPage}/>
            <Route path='/sign' component={Sign}/>
            <Route path='/notfound' component={PageNotFound}/>
            <Redirect to='/notfound/' />
            <Redirect from='/' to='/home' />

        </Switch>
      
        <Footer />
        {/* <Coffee/>
        <Resturant/>
        <Clinics/>
        <Hospitals/>
        <Sign/>
        <SingleResPage />
       < SingleMedicalPage />
        */}
    </div>
  );
}

export default App;
