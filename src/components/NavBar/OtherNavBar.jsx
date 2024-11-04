
import { NavLink } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";

const OtherNavBar = ({title, subtitle, cart, wishlist, currentBtn, setCurrentBtn}) => {

    return (
        <div>
            <div className="navbar  lg:w-4/5 mx-auto  py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium text-base text-[#0B0B0BB3]">

                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='/dashboard'>Dashboard</NavLink>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-12 font-medium text-base text-[#0B0B0BB3]">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-6">
                <button className="border p-3 rounded-full">
                    <HiOutlineShoppingCart />
                </button>
                <button className="border p-3 rounded-full">
                    <AiOutlineHeart />
                </button>
            </div>
        </div>
        <div className='h-[400px] bg-banner border-2 text-center text-white'>
                <h2 className='font-bold text-3xl mt-8'>{title}</h2>
                <p className='text-base mt-4'>{subtitle}</p>
                {cart && (
                <NavLink
                to='/dashboard/cart'
                // onClick={()=>setCurrentBtn(true)}
                ><button className='border-2 p-5'>{cart}</button></NavLink>
            )}
            {wishlist && (
                <NavLink
                to='/dashboard/wishlist'
                // onClick={()=>setCurrentBtn(false)}
                ><button className='border-2 p-5'>{wishlist}</button></NavLink>
            )}
            </div>
        </div>
    );
};

export {OtherNavBar};