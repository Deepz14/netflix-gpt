import React from "react";
import { Link } from "react-router-dom";
import { NETFLIX_HEADER_BG_IMG, NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
    return (
        <div className="header-container w-full">
            <div className="header-bg-image-wrapper">
                <img alt="bg-img" 
                className="header-bg-img h-full w-full"
                src={NETFLIX_HEADER_BG_IMG} />
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