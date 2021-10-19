import React from 'react';
import useAuth from '../../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const {signInUsingGoogle} =useAuth();
    return (
        <div className="login mt-5">
            <h1>👥 Please Login  👇🏻</h1>
            <button onClick={signInUsingGoogle} className="btn-warning p-3 fw-bold mt-3 rounded-pill border-0">Google Sign In</button>
        </div>
    );
};

export default Login;