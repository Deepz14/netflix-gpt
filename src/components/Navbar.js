import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/userSlice";
import { searchMovies, addMovieResults } from "../store/searchSlice";
import { ACCOUNT_DETAILS_PROFILE_IMG, NETFLIX_LOGO, USER_PROFILE_ICON } from "../utils/constants";

const Navbar = () => {
    const userInfo = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchInput = useRef(null);

    const handlerLogout = () => {
        sessionStorage.clear();
        dispatch(remove());
        navigate("/login");
    }

    const searchNavigate = (e) => {
        if(e.target.value){
            dispatch(searchMovies(e.target.value));
            navigate("/search");
        }else{
            dispatch(addMovieResults([]));
            navigate("/browse");
        }
    }

    useEffect(() => {
        if(searchInput.current.value === null || searchInput.current.value ==='') {navigate("/browse")};
    }, []);


    return (
        <nav className="navbar-container w-full shadow flex items-center justify-between fixed py-5 px-5">
            <div className="w-[150px] h-full browse-nav-container cursor-pointer" onClick={() => navigate("/browse")}>
                {NETFLIX_LOGO}
            </div>
            <div className="flex items-center">
                <div className="search-container mr-5 pr-3">
                    <input ref={searchInput} onChange={searchNavigate} className="px-3 py-2 rounded text-black" type="search" placeholder="Search" />
                </div>
                <div className="user-account-details pr-5 mr-8">
                    {/* <li>{userInfo?.displayName}</li> */}
                    {/* <button onClick={handlerLogout}
                        className="px-5 py-2 mx-3 rounded hover:bg-red-500 hover:text-white">
                            Logout
                    </button> */}
                    <div className="user-icon-container h-10 cursor-pointer mr-3">
                        <img className="h-full rounded" alt="user-icon" src={USER_PROFILE_ICON} />
                        <div className="arrow relative mx-2">
                            <span className="caret-down"></span> 
                            <span className="caret-up"></span>
                        </div>
                        <div className="account-details-card bg-black text-white rounded-sm">
                            <ul className="p-3">
                                <li className="flex items-center mb-3">
                                    <img className="profile-icon rounded" 
                                        src={ACCOUNT_DETAILS_PROFILE_IMG} 
                                        alt="user-img" />
                                    <span className="ml-3">Deepz</span>
                                </li>
                            <li className="flex items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="30" width="30" viewBox="0 0 24 24">
                                        <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
                                    </svg>
                                    <span className="ml-3">Account</span>
                            </li>
                            <li className="flex items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="30" width="30" viewBox="0 0 24 24">
                                        <path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 
                                        1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
                                    <span className="ml-3">Help Centre</span>
                            </li>
                            </ul>
                            <hr />
                            <div className="pt-2 pb-3 px-4" onClick={handlerLogout}>
                                <span>Sign Out of Netflix</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;