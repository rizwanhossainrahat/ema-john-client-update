import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'



const Login = () => {
    const navigate=useNavigate()
   
    const {singnInUsingGoogle}=useAuth()

    const location=useLocation()
    
    
    
    const redirectUri=location.state?.from || '/shop';
    console.log('come from',location.state?.from)

    

    const handleGoogleSignIn=()=>{
        singnInUsingGoogle()
         .then(result=>{
            navigate(redirectUri)
       
        })
    }

    return (
        <div className='login-form'>
            <div>
                <form onSubmit="">
                    <h2>Login</h2>
                        <input type="email" name="" id="" placeholder='Type your email' />
                        <br />
                        <input type="password" name="" id="" />
                        <br />
                        
                        <input type="submit" value="submit" />
                </form>
                <br />
                <p>new ema-john account <Link to='/register'>Create account</Link></p>
                <div>
                <button onClick={handleGoogleSignIn} className='btn-regular'>Google Sign in</button>
                </div>
              
                
            </div>
        </div>
    );
};

export default Login;