import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)
    const handleLogOut = () => {
        logout()
    }
    return (
        <nav className="fixed top-0 z-10 w-[100vw]">
            <div className="navbar bg-slate-800 px-20 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Chef's</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Career</Link></li>


                        </ul>
                    </div>
                    <p className="text-4xl" style={{ fontFamily: 'Pacifico' }}>Epicuream Realm</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base font-semibold">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Chef's</Link></li>
                        <li><Link to='/details'>View Details</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Career</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    { user ? <button onClick={handleLogOut}>LogOut</button> : <Link to='/login'>Log In</Link>}
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;