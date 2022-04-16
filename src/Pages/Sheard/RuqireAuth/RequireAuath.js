import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

function RequireAuth({ children }){
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    
    if (loading) {
        return (
          <div className='d-flex justify-content-center align-items-center text-center text-primary'>
            <h4>Loadding....</h4>
          </div>
        );
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

export default RequireAuth;