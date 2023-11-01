import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/userSlice";

const Browse = () => {
    const userInfo = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerLogout = () => {
        dispatch(remove());
        navigate("/");
    }

    return (
        <div>
            <nav className="w-full shadow flex items-center justify-between py-3 px-3">
                <h1>Netflix</h1>
                <ul className="flex items-center">
                    <li>{userInfo?.displayName}</li>
                    <li>
                        <button onClick={handlerLogout}
                            className="px-5 py-2 mx-3 rounded hover:bg-red-500 hover:text-white">
                                Logout
                        </button>
                    </li>
                </ul>
            </nav>
 
        </div>
    )
}

export default Browse;