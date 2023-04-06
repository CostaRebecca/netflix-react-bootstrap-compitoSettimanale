import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './components/img/logo.png'

import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';

function App() {
  return (
    <div className="App">
     <MyNav Img={logo}/>
     <MyMain/>
     <MyFooter/>
    </div>
  );
}

export default App;
