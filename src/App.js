import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from './pages/home/Home';
import {BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom";
import React from "react";
import Element from "./pages/element/Element";
import Auth from "./pages/auth/Auth";
import Favourite from "./pages/favourite/Favourite";
import About from "./pages/about/About";

function App() {


    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/favourite' element={<Favourite/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/auth' element={<Auth/>}/>
                    <Route path='/item' element={<Element/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
