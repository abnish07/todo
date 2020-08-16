import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <div className=" text-decoration-none  text-center p-3">
        <nav >
        <Link to="/" className="text-white mr-5 ">Home</Link>
        <Link to="/login" className=" text-white ">Login</Link>
        </nav></div>
    )
}


export default Navbar;