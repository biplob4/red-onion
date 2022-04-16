import React from 'react';
import logo from '../../../images/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigait = useNavigate();
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    if (user) {
        navigait("/home")
    }
    if (loading) {
        return (
          <div className='d-flex justify-content-center align-items-center text-center text-primary'>
            <h4>Loadding....</h4>
          </div>
        );
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
        await
            updateProfile({ displayName });
        toast('Updated profile');
    }
    return (
        <div className='mt-5 login-from'>
            <img className='w-50 my-5' src={logo} alt="img" />
            <form onSubmit={handelSubmit}>
                <input type="text" name='name' placeholder='Type your Name' />
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder='password' />
                <input className='from-btn' type="submit" value="Login" />
            </form>
            <div className="d-flex align-items-center justify-contant-center my-4">
                <div style={{ height: "1.5px", background: "gray", width: "100%" }} className=""></div>
                <samp className='mx-2'>OR</samp>
                <div style={{ height: "1.5px", background: "gray", width: "100%" }} className=""></div>
            </div>
            <Link style={{ textDecoration: "none" }} to="/login" className='text-primary text-center my-4 text-danger'>IF You Alrady Signup So ?<button className=' btn btn-link'>Please Login</button></Link>
            <ToastContainer />
        </div>
    );
};

export default Signup;