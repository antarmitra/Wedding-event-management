import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    console.log(user);

    const navLinks = <>
        <div className="lg:flex justify-between gap-14 items-center">
            <li><NavLink className="text-lg font-semibold text-white  px-2 py-1 rounded-lg" to="/">Home</NavLink></li>
            <li><NavLink className="text-lg font-semibold text-white  px-2 py-1 rounded-lg" to="/gallery">Gallery</NavLink></li>
            <li><NavLink className="text-lg font-semibold text-white  px-2 py-1 rounded-lg" to="/portfolio">Portfolio</NavLink></li>



            {
                user ?
                    <div className="flex gap-2 flex-row-reverse lg:flex-row">
                        <div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a>{user.displayName}</a></li>
                                    <li><a>{user.email}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleSignOut} className="btn bg-orange-400 text-white">Sign Out</button>

                        </div>
                    </div> :
                    <div className="flex gap-2 mt-4 md:mt-4 lg:mt-0">
                        <div className="navbar-end">
                            <Link to="/login">
                                <button className="text-lg font-semibold text-white bg-orange-400 px-5 py-2 rounded-md">Login</button>
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <Link to="/register">
                                <button className="text-lg text-white font-semibold bg-orange-400 px-5 py-2 rounded-md">Register</button>
                            </Link>
                        </div>
                    </div>

            }


        </div>
    </>
    return (
        <div className="navbar bg-black bg-opacity-25 p-5 rounded-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-8 z-[1] p-6 shadow bg-black bg-opacity-50 rounded-box w-60 ">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-2xl text-white font-semibold ml-10 md:ml-52 lg:ml-4">Dream<span className="text-orange-400">Day</span>Planners</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;