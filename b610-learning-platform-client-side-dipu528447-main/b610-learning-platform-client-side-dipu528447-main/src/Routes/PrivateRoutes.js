import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LoadingContext, UserContext } from '../App';

const PrivateRoutes = ({children}) => {
    const [user,setuser]=useContext(UserContext)
    const [loading,setLoading]=useContext(LoadingContext);
    const location = useLocation();
    console.log({user})
    if(loading){
        return <div>Loading....</div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
};

export default PrivateRoutes;