import Navbarr from './shared/navbar/navbar';
import Home from './components/home/home';
import {Coffee} from './components/rest/component/coffee/index'
import './App.css';
import { Resturant } from './components/rest/component/resturant/resturants';
import { Clinics } from './components/medical/component/clinic/clinins';
import { Hospitals } from './components/medical/component/hospital/hospitals';
import { Pharmacy } from './components/medical/component/pharmacy/pharmacy';
import LogIn from './components/log-in/LogIn';
import Sign from './components/sign/sign';
import SingleResPage from './components/rest/component/SingleRestPage/SingleRestPage';
import SingleCoffeePage from './components/rest/component/SingleCoffeePage/SingleCoffeePage';
import SingleHospitalPage from './components/medical/component/SingleHospitalPage/SingleHospitalPage';
import SingleClinicPage from './components/medical/component/SingleClinicPage/SingleClinicPage '
import Footer from './shared/footer/footer';


function App() {
  return (
    <div className="App">
        <Navbarr />
        <Home />
        <Coffee/>
        <Resturant/>
        <Clinics/>
        <Hospitals/>
        <Pharmacy/>
        <LogIn />
        <Sign/>
        <SingleResPage />
        <SingleCoffeePage /> 
        <SingleHospitalPage />
        <SingleClinicPage />
        <Footer />
    </div>
  );
}

export default App;
