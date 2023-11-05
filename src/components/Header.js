import React from "react";
import { Link } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
    return (
        <div className="header-container w-full">
            <div className="header-bg-image-wrapper">
                <img alt="bg-img" 
                className="header-bg-img h-full w-full"
                src={"https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"} />
            </div>
            <div className="header-logo-wrapper w-full p-3">
                <Link to={"/"}>
                    {NETFLIX_LOGO}
                </Link>
             
            </div>
        </div>
    )
}

export default Header;