import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    // const {children}=props
    const location=useLocation()
    const {user}=useAuth()
    return (
        <div>
            {
               
               user.email?
                children:
                <Navigate  {...rest} to='/login' state={{ from: location }}  replace  ></Navigate>
            }
        </div>
    );
};

// we declare state to know  which path we come from and location told us the path

export default PrivateRoute;