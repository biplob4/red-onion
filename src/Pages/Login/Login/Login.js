import React from 'react';
import './Login.css';
import logo  from '../../../images/logo2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const nevigate = useNavigate();
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    if(user){
        nevigate(from,{replace:true})
    }
    if (loading) {
        return (
          <div className='d-flex justify-content-center align-items-center text-center text-primary'>
            <h4>Loadding....</h4>
          </div>
        );
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div className='mt-5 login-from from-style'>
            <img className='w-50 my-5' src={logo} alt="img"/>
            <form onSubmit={handelSubmit}>
                <input type="email" name="email"  placeholder='Email'/>
                <input type="password" name="password" placeholder='password' />
                {error&& <p className='text-danger text-center'>{error.message}</p>}
                <input className='from-btn' type="submit" value="Login" />
            </form>
            <div className="d-flex align-items-center justify-contant-center my-4">
                <div style={{height:"1.5px",background:"gray",width:"100%"}} className=""></div>
                <samp className='mx-2'>OR</samp>
                <div style={{height:"1.5px",background:"gray",width:"100%"}} className=""></div>
            </div>
            <Link style={{textDecoration:"none"}} to="/signup" className='text-primary text-center mt-4 mb-5 text-danger'>IF You New User So Please?<button className=' btn btn-link'>Sign-up</button> </Link>
        </div>
    );
};

export default Login;