import React from 'react'
import './SignUp.css';
import hospital from '../../public/hos.jpeg'

const SignUp = () => {
    return (
        <div className='signup-container'>
            <div className='signup-img'>
                <h1>noWorries</h1>
            </div>
            <form className='signup-form-container'>
                <h3>SignUp Form</h3>
                <label id="name">Name :-</label>
                <input placeholder='Enter Your Name' />
                <label>Email :-</label>
                <input placeholder='Enter Your Email' />
                <label>Password :-</label>
                <input placeholder='Enter Your Password' />
                <label htmlFor='role'>Role :-</label>
                <select id="role">
                    <option>Admin</option>
                    <option>Patient</option>
                </select>

                <label>Mobile Number :-</label>
                <input placeholder='Enter Your Mobile Number' />

                <button className='signup-button'>Submit</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    )
}

export default SignUp
