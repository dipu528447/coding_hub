
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { LoadingContext, ThemeContext, UserContext } from '../../App';
import app from '../../firebase.config';
const NavBar = () => {
    const [user,setUser]=useContext(UserContext)
    const [loading,setLoading]=useContext(LoadingContext)
    const [theme,setTheme]=useContext(ThemeContext)
    const auth=getAuth(app)
    const navigate=useNavigate();
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>unSubscribe();
    },[])
    const logout=()=>{
        signOut(auth).then(() => {
            setUser({})
            alert('log out successfully')
            navigate(0)
          }).catch((error) => {
            console.error(error)
          });
    }
    return (
        <div>
            <div className={`navbar bg-base-100`}>
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>Courses</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/blog'>Blog</Link>
                        
                    </ul>
                    </div>
                    <img className='w-12 rounded' src='images/logo.jpg'/>
                    <a className="btn btn-ghost normal-case text-xl">Coding Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link to='/' className='p-4'>Courses</Link>
                        <Link to='/faq' className='p-4'>FAQ</Link>
                        <Link to='/blog' className='p-4'>Blog</Link>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn" onClick={()=>setTheme(!theme)}>Change Theme</a>  
                    {console.log(user)}
                    {user?
                    
                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src={user.photoURL} title={user.displayName}/>
                            </div>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           
                            <li><a>Welcome {user.displayName}!</a></li>
                            <li onClick={logout}>Logout</li>
                        </ul>
                    </div>
                    :
                    <Link to='/login' className='btn'>Login  </Link>
                    }
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;