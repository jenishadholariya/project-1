import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';

import Home from './Container/Home/Home';
import Footer from './Component/Footer/Footer';
import{ Route,Switch } from 'react-router-dom';
import Department from './Container/Department/Department';
import Doctor from './Container/Doctor/Doctor';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Appointment from './Container/Appoinment/Appointment';
import Login from './Container/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <switch>
        <Route path={"/"} exact component={Home}></Route>
        <Route path={"/Department"} exact component={Department}></Route>
        <Route path={"/Doctor"} exact component={Doctor}></Route>
        <Route path={"/About"} exact component={About}></Route>
        <Route path={"/Contact"} exact component={Contact}></Route>
        <Route path={"/Appointment"} exact component={Appointment}></Route>
        <Route path={"/Login"} exact component={Login}></Route>
      </switch>
      <Footer />
    </div>
  );
}

export default App;
