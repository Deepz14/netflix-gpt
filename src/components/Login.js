import React, {useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../store/userSlice";
import Header from "./Header";
import { formValidation } from "../utils/helper";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showEmailError, setShowEmailError] = useState(null);
    const [showPasswordError, setShowPasswordError] = useState(null);
    const [showAuthError, setShowAuthError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useRef(null);
    const name = useRef(null);
    const password = useRef(null);

    const handlerAuthentication = () => {
        const checkValidation = formValidation(email.current.value, password.current.value);
        if(checkValidation?.field === "email"){
            setShowEmailError(checkValidation);
            setShowPasswordError(false);
        }else if (checkValidation?.field === "password"){
            setShowPasswordError(checkValidation);
            setShowEmailError(false);
        }else{
            setShowEmailError(false);
            setShowPasswordError(false);
            // Make an API request
            isSignIn ? signInHandler() : signUpHandler();
        }
    }

    const signInHandler = async() => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
            // Signed in 
            const user = userCredential.user;
            console.log("Login Info: ", user);
            dispatch(add({ uId: user.uid, email: user.email, displayName: user.displayName, accessToken: user.accessToken }));
            navigate("/browse");
        }catch(error){
            setShowAuthError(error.message);
        }
    }

    const signUpHandler = async() => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
            const user = userCredential.user;
            const userProfileUpdate = await updateProfile(auth.currentUser, {
                displayName: name.current.value,
            });
            console.log("SignUp User:", user);
            dispatch(add({ uId: user.uid, email: user.email, displayName: user.displayName, accessToken: user.accessToken }));
            navigate("/browse");
        }catch(error){
            setShowAuthError(error.message);
        }
    }

    return (
        <div>
            <Header />
             <div className="login-container w-full">
                <form onSubmit={(e) => e.preventDefault()} className="form-container text-white md:rounded-lg">
                    <div className="md:mb-8">
                        <h1 className="text-2xl font-bold">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
                    </div>
                    {
                        !isSignIn && (
                            <div className="form-input-container my-3">
                                <input ref={name} className="w-full px-2 py-3 mb-3 rounded text-xl bg-gray-600" type="text" placeholder="Name"  />
                            </div>
                        )
                    }
                    <div className="form-input-container my-3">
                        <input ref={email} className="w-full px-2 py-3 mb-3 rounded text-xl bg-gray-600" 
                           type="text" placeholder="Email"  />
                        { showEmailError && (
                            <div className="form-error">{showEmailError.message}</div> )
                         }
                    </div>
                    <div className="form-input-container my-3">
                        <input ref={password} className="w-full px-2 py-3 mb-3 rounded text-xl bg-gray-600" 
                           type="password" placeholder="Password"  />
                        {  showPasswordError && (
                            <div className="form-error">{showPasswordError.message}</div> )
                        }
                    </div>
                    <div className="form-input-container my-3">
                        {
                            showAuthError &&
                            <div className="form-error">{showAuthError}</div>
                        }
                    </div>
                    <div className="form-btn-container my-3" onClick={() => handlerAuthentication()}>
                        <button className="py-3 px-5 bg-red-600 w-full rounded mb-3 font-bold">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                    </div>
                    <div className="mt-5 md:my-8 cursor-pointer">
                        <span className="text-lg text-gray-500">
                            {isSignIn ? 'New to Netflix?' : 'Already an User?'}
                        </span> 
                        <span onClick={() => setIsSignIn(!isSignIn)} className="text-lg ml-2">
                            {isSignIn ? 'Sign Up' : 'Sign In'}
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login;