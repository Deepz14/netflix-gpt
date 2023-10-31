import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <Header />
             <div className="login-container w-full">
                <form className="form-container text-white md:rounded-lg">
                    <div className="md:mb-8">
                        <h1 className="text-2xl font-bold">Sign In</h1>
                    </div>
                    <div className="form-input-container my-3">
                        <input className="w-full px-2 py-3 mb-3 rounded text-xl bg-gray-600" type="text" placeholder="Name"  />
                    </div>
                    <div className="form-input-container my-3">
                        <input className="w-full px-2 py-3 mb-3 rounded text-xl bg-gray-600" type="text" placeholder="Email"  />
                        {/* <div className="form-error">Please enter a valid email address or phone number.</div> */}
                    </div>
                    <div className="form-input-container my-3">
                        <input className="w-full px-2 py-3 mb-3 rounded text-xl bg-gray-600" type="password" placeholder="Password"  />
                        {/* <div className="form-error">Your password must contain between 4 and 60 characters.</div> */}
                    </div>
                    <div className="form-btn-container my-3">
                        <button className="py-3 px-5 bg-red-600 w-full rounded mb-3 font-bold">Sign In</button>
                    </div>
                    <div className="mt-5 md:my-8">
                        <span className="text-lg text-gray-500">New to Netflix?</span> 
                        <Link><span className="text-lg ml-2">Sign up now.</span></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login;