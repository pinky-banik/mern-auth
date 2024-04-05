// import React from 'react';

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    console.log(currentUser);
    return (
        <div className="bg-slate-200">
            <div className="flex justify-between items-center mx-auto p-5">
                <h1 className="font-bold">Auth App</h1>
                <ul className="flex gap-5">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/profile'>Sign In</Link>
                    {
                        currentUser ?
                            (
                            <img src={currentUser.profilePicture} alt="profile" className="h-7 w-7 rounden-full object-cover"/>
                            ) : (
                                <li>sign in</li>
                            )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;