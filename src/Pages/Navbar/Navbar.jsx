import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

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
    const navlinks2 = <>
        <div className=" flex flex-col gap-5">
            <NavLink className='btn btn-ghost btn-sm'>My-services</NavLink>
            <NavLink className='btn btn-ghost btn-sm'>Add-services</NavLink>
            <NavLink className='btn btn-ghost btn-sm'>My-schedules</NavLink>
        </div>
    </>

    return (
        <div>
            <div className="navbar bg-blue-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
                            {navLinks}
                            <li>
                                <a className="font-bold">Dashboard</a>
                                <ul className="p-2">
                                    {navlinks2}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a href="/" className=" normal-case text-xl">
                        <img src="logo3.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex items-center menu menu-horizontal px-1">
                        {navLinks}
                        <li tabIndex={0}>
                            <details>
                                <summary className=" font-medium text-base">Dashboard</summary>
                                <ul className="p-2 rounded bg-blue-200">
                                    {navlinks2}
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
                {/* {
                user ?
                    <div className="navbar-end gap-5">
                        <div className="flex flex-col items-center mx-3">
                            <img className="w-[50px] rounded-full" src={user.photoURL} alt="" />
                            <p className=" font-medium text-center">{user.displayName}</p>
                        </div>
                        <button onClick={handleSignOut} className="btn normal-case">SignOut</button>
                    </div> : 
                        <div className="navbar-end lg:gap-5 md:gap-3 gap-1">
                            <div className="flex flex-col items-center">
                                <div className="w-10 rounded-full">
                                    <img src={defaultUser} />
                                </div>
                            </div>
                            <Link to='/login'>
                                <button className="btn normal-case">Login</button>
                            </Link>
                        </div>
            } */}
            </div>
        </div>
    );
};

export default Navbar;