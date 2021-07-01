// import Home from './components/home/home';
import {Coffee} from './components/rest/component/coffee/index'
import './App.css';
import { Resturant } from './components/rest/component/resturant/resturants';
import { Clinics } from './components/medical/component/clinic/clinins';
import { Hospitals } from './components/medical/component/hospital/hospitals';
import { Pharmacy } from './components/medical/component/pharmacy/pharmacy';

function App() {
  return (
    <div className="App">
        
        <Coffee/>
        <Resturant/>
        
        <Hospitals/>
        <Pharmacy/>
    </div>
  );
}

export default App;
