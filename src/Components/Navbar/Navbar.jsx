import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/user.png";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/career"}>Career</NavLink>
      </li>
    </>
  );
  // user
  const {user, signOutUser}= useAuth();
  // signOut
    const handleSignOut = () => {
      signOutUser()
      .then(() => {
        toast.success('Logout successful')
      })
      .catch(err => {
        toast.error(err.message)
      })
    }
  return (
    <div className="navbar bg-base-100 my-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-5">
        {user ? <img className="w-10 h-10 rounded-full" src={user?.photoURL} /> : <img className="w-10 rounded-full" src={profile} /> }
        {
          user ?
          <p onClick={handleSignOut} className="btn bg-black hover:bg-slate-700 text-white btn-sm">
            LogOut
          </p>
         : <Link to={'/login'}>
          <p className="btn bg-black hover:bg-slate-700 text-white btn-sm">
            Login
          </p>
        </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
