import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';
import app from '../../firebase.config';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName]=useState('')
    const [photoURL, setPhotoURL]=useState('')
    const auth = getAuth(app);

    function verifyEmail() {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("please check your mail inbox or spam folder and click on verify button")
            });
    }
    // create user with email password
    function createUser() {
        if(email)
        {
            if(password){
                if(fullName){
                    if(photoURL){
                        createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            updateProfile(auth.currentUser, {
                                displayName: fullName, photoURL: photoURL
                            }).then(() => {
                            }).catch((error) => {
                            });
                            verifyEmail()
                            console.log(user);

                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            alert(errorMessage);
                        });
                    }
                    else{
                        alert('enter the photo url')
                    }
                }
                else{
                    alert('enter the name')
                }
            }
            else{
                alert('please enter the passwrod')
            }
        }
        else{
            alert('please enter the email')
        }
    }


    return (
        <div>
            <h1 className='text-center text-3xl text-yellow-50 py-4'>Registration Form</h1>
            <div className="form-control w-full max-w-xs m-auto py-4">
                <label className="label">
                    <span className="label-text">Enter Your Email</span>
                </label>
                <input type="email" placeholder="Type here" className="input input- input-primary w-full max-w-xs" onChange={event => setEmail(event.target.value)} />
                <label className="label">
                    <span className="label-text">Enter Your Password</span>
                </label>
                <input type="password" placeholder="Type here" className="input input- input-primary w-full max-w-xs" onChange={event => setPassword(event.target.value)} />
                
                <label className="label">
                    <span className="label-text">Enter Your Name</span>
                </label>
                <input type="text" placeholder="Type here" className="input input- input-primary w-full max-w-xs" onChange={event => setFullName(event.target.value)} />
                <label className="label">
                    <span className="label-text">Enter Your Photo Url</span>
                </label>
                <input type="email" placeholder="Type here" className="input input- input-primary w-full max-w-xs" onChange={event => setPhotoURL(event.target.value)} />
                <div className='flex'>
                    <button className="btn btn-info w-1/2 m-auto my-5" onClick={createUser}>Sign in</button>
                </div>
                <Link to='/login'><p className='text-info'>Already have an account?</p></Link>
            </div>
        </div>
    );
};

export default Registration;