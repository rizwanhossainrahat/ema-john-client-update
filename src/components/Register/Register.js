import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='your email' />
                    <br />
                    <input type="password" name="" id="" placeholder='your password' />
                    <br />
                    <input type="password" name="" id="" placeholder='re-enter your password' />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already you have an account?<Link to='/login'>Login</Link></p>
                <div>else sign in using google</div>
                
                <button className='btn-regular'>Google sign in </button>

            </div>
        </div>
    );
};

export default Register;
