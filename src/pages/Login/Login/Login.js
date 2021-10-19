import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Register from '../Register/Register';
import "./Login.css"

const Login = () => {
    const[isRegister, setRegister] =useState(true);
    const {signInUsingGoogle} =useAuth();
    return (
        <div className="login mt-5">
            <h1>👥</h1>
            <Register></Register>
            <button onClick={signInUsingGoogle} className="btn-warning p-3 fw-bold mt-3 rounded-pill border-0">Google Sign In</button>
        </div>
    );
};

export default Login;