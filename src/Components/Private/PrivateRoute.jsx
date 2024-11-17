import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;