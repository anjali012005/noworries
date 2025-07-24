import React from 'react'

const Login = () => {
    return (
        <div className='signup-container'>
            <div className='signup-img'>
                <h1>noWorries</h1>
            </div>
            <form className='signup-form-container'>
                <h3>Login Form</h3>
                <label>Email :-</label>
                <input placeholder='Enter Your Email' />
                <label>Password :-</label>
                <input placeholder='Enter Your Password' />
                <button className='signup-button'>Submit</button>
                <p>Don't have an account? <a href="/">SignUp</a></p>
            </form>
        </div>
    )
}

export default Login
