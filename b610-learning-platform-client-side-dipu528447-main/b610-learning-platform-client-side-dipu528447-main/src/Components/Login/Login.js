import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {getAuth, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGofore,FaGithub } from 'react-icons/fa';
import app from '../../firebase.config';
import { UserContext } from '../../App';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [user,setUser]= useContext(UserContext)
    const auth=getAuth(app)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from)
    // sign in user with email password
    function login() {
        console.log(email, password)
        if (!email) {
            setMsg('Please provide a your email address')
            return ''
        }
        if (!password) {
            setMsg('Please provide a your password')
            return ''
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if(user.emailVerified){
                    setUser(user);
                    navigate(from, {replace: true});
                    
                }
                else{
                    setMsg("please verify your email")
                }
            })
            .catch((error) => {
                setMsg('Invalid user and password')
            });
    }
    function loginwithGmail(event) {
        event.preventDefault();
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then(function (result) {
                console.log(result.user.email)
                const { user } = result;
                user.emailVerified = true;
                setUser(user)
                navigate(from, {replace: true});
            })
            .catch((error) => {
                const errorMessage = error.message;
                setMsg(errorMessage)
            });
    }
    function loginWithGithub(event){
        event.preventDefault();
        const provider = new GithubAuthProvider();
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;


            // The signed-in user info.
            const user = result.user;
            user.emailVerified=true;
            setUser(user)
            navigate(from,{replace:true});
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            setMsg(errorMessage)
            // ...
        });

    }

    return (
        <div>

            <h1 className='text-center text-3xl text-yellow-50 py-4'>Login Form</h1>
            <div className="form-control w-full max-w-xs m-auto py-4">
                <label className="label">
                    <span className="label-text">Enter Your Email</span>
                </label>
                <input type="email" placeholder="Type here" className="input input- input-primary w-full max-w-xs" onChange={event => setEmail(event.target.value)} required />
                <label className="label">
                    <span className="label-text">Enter Your Password</span>
                </label>
                <input type="password" placeholder="Type here" className="input input- input-primary w-full max-w-xs" onChange={event => setPassword(event.target.value)} required />
                <p className='text-start text-red-500'>{msg}</p>
                <div className='flex'>
                    <button className="btn btn-info w-28 m-5"  onClick={login}>Login</button>
                    <Link to="/registration"><button className="btn btn-secondary w-28 m-5">Signup</button></Link>
                </div>
                <div className='flex m-5 justify-center space-x-3'>
                    <button className="btn btn-circle bg-blue-900" onClick={loginWithGithub} >
                        <FaGithub/>
                    </button>
                    <button className="btn btn-circle bg-black" onClick={loginwithGmail}>
                        <FaGofore/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;