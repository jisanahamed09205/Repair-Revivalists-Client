import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
            .then()
            .catch()
    }

        const navLinks = <>
        <NavLink 
            to='/' 
            className={({ isActive })=>
            isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }>
                Home
        </NavLink>
        <NavLink 
            to='/services' 
            className={({ isActive })=>
            isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }>
                Services
        </NavLink>
    </>

    const navDash = <>
        {
            user?.email ? <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn btn-ghost btn-sm">Dashboard</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <NavLink to='/myServices' className={({ isActive })=>isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>My-services</NavLink>
                <NavLink to='/addServices' className={({ isActive })=>isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Add-services</NavLink>
                <NavLink to='/mySchedules' className={({ isActive })=>isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>My-schedules</NavLink>
            </ul>
        </div> : ""
        }
    </>

    return (
        <div>
            <div className="navbar bg-blue-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52">
                            {navLinks}
                            {navDash}
                        </ul>
                    </div>
                    <a href="/" className=" normal-case text-xl">
                        <img src="/logo3.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex items-center menu menu-horizontal px-1">
                        {navLinks}
                        {navDash}
                    </ul>
                </div>
                {
                user ?
                    <div className="navbar-end gap-5">
                        <div className="flex flex-col items-center mx-3">
                            <img className="w-[50px] rounded-full" src={user.photoURL} alt="" />
                            <p className=" font-medium text-center">{user.displayName}</p>
                        </div>
                        <button onClick={handleSignOut} className="btn normal-case">LogOut</button>
                    </div> : 
                        <div className="navbar-end lg:gap-5 md:gap-3 gap-1">
                            <div className="flex flex-col items-center">
                                <div className="w-10 rounded-full">
                                    <img src='/defaultUser.png' />
                                </div>
                            </div>
                            <Link to='/login'>
                                <button className="btn normal-case">Login</button>
                            </Link>
                        </div>
            }
            </div>
        </div>
    );
};

export default Navbar;