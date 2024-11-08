import { NavLink } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useContext } from 'react';

import { CartContext, WishlistContext } from '../../context';

const OtherNavBar = ({ title, subtitle, cart, wishlist, isDashboard, isWhyChooseUs, isStatistics }) => {
    const { cartLength } = useContext(CartContext);
    const { wishlistLength } = useContext(WishlistContext);

    const getLinkClass = ({ isActive }) =>
        `text-base font-medium ${isActive ? 'text-black border-2 border-black p-2 rounded-full' : 'text-[#0B0B0BB3]'}`

    return (
        <div>
            <div className="navbar lg:w-4/5 mx-auto py-6">
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
                            <NavLink to='/' className={getLinkClass}>Home</NavLink>
                            <NavLink to='/statistics' className={getLinkClass}>Statistics</NavLink>
                            <NavLink to='/dashboard' className={getLinkClass}>Dashboard</NavLink>
                            <NavLink className={getLinkClass} to='/whyChooseUs' ><button >Why Choose Us</button></NavLink>
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost hover:bg-transparent hover:shadow-none text-xl">Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-12 font-medium text-base flex justify-center items-center">
                        <NavLink to='/' className={getLinkClass}>Home</NavLink>
                        <NavLink to='/statistics' className={getLinkClass}>Statistics</NavLink>
                        <NavLink to='/dashboard' className={getLinkClass}>Dashboard</NavLink>
                        <NavLink className={getLinkClass} to='/whyChooseUs' ><button >Why Choose Us</button></NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-4">
                    <NavLink to="/dashboard/cart" className="relative flex items-center">
                        <button className="border p-3 rounded-full flex items-center justify-center">
                            <HiOutlineShoppingCart />
                        </button>
                        {cartLength > 0 && (
                            <div className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-black bg-white border text-xs shadow-md">
                                {cartLength}
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/dashboard/wishlist" className="relative flex items-center">
                        <button className="border p-3 rounded-full flex items-center justify-center">
                            <AiOutlineHeart />
                        </button>
                        {wishlistLength > 0 && (
                            <div className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-black bg-white border text-xs shadow-md">
                                {wishlistLength}
                            </div>
                        )}
                    </NavLink>
                </div>

            </div>
            <div className={`${isDashboard || isWhyChooseUs || isStatistics ? 'h-auto' : 'h-[400px]'} bg-banner border-2 text-center p-2 lg:p-0 text-white`}>
                <h2 className='font-bold text-3xl mt-8'>{title}</h2>
                <p className='text-base mt-4'>{subtitle}</p>
                <div className='my-8 flex flex-col space-y-3 lg:block'>
                    {cart && (
                        <NavLink
                            to="/dashboard/cart"
                            className={({ isActive }) =>
                                isActive || window.location.pathname === '/dashboard'
                                    ? 'border-2 px-16 py-3 rounded-[2rem] lg:mr-6 bg-white text-[#9538E2] font-[800]'
                                    : 'border-2 px-16 py-3 rounded-[2rem] lg:mr-6 text-white border-[#FFFFFF]'
                            }
                        >
                            <button>{cart}</button>
                        </NavLink>
                    )}
                    {wishlist && (
                        <NavLink
                            to="/dashboard/wishlist"
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-2 lg:px-16 py-3 rounded-[2rem] bg-white text-[#9538E2] font-[800]'
                                    : 'border-2 lg:px-16 py-3 rounded-[2rem] text-white border-[#FFFFFF]'
                            }
                        >
                            <button>{wishlist}</button>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export { OtherNavBar };
