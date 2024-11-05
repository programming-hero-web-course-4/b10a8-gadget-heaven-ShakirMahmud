import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAddToCartList, getAddToWishList } from "../../utilities/addToDB";

const HomeNavBar = () => {
    const [totalProductsInCart, setTotalProductsInCart] = useState(getAddToCartList().length);
    const [totalProductsInWishList, setTotalProductsInWishList] = useState(getAddToWishList().length);

    useEffect(() => {
        setTotalProductsInCart(getAddToCartList().length);
        setTotalProductsInWishList(getAddToWishList().length);
    }, []);

    const getLinkClass = ({ isActive }) => 
        `menu-item ${isActive ? 'text-white font-bold border-2 p-2 rounded-full' : 'text-white p-2'}`;

    return (
        <div className="bg-banner outline outline-2 outline-offset-8 outline-[#F6F6F6] rounded-[32px] w-[96.25%] mx-auto mt-3">
            <div className="navbar text-white lg:w-[83.117%] mx-auto py-6 -translate-y-3">
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
                            className="menu menu-sm dropdown-content bg-[#9538E2] rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium text-base flex justify-center">
                            <NavLink to='/' ><button className={getLinkClass}>Home</button></NavLink>
                            <NavLink to='/statistics' className={getLinkClass}><button className={getLinkClass}>Statistics</button></NavLink>
                            <NavLink to='/dashboard' className={getLinkClass}><button className={getLinkClass}>Dashboard</button></NavLink>
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex justify-center">
                    <ul className="menu menu-horizontal px-1 gap-12 font-medium text-base">
                        <NavLink to='/' className={getLinkClass}>Home</NavLink>
                        <NavLink to='/statistics' className={getLinkClass}>Statistics</NavLink>
                        <NavLink to='/dashboard' className={getLinkClass}>Dashboard</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <NavLink
                        to="/dashboard/cart"
                        className='flex'>
                        <button className="border p-3 rounded-full">
                            <HiOutlineShoppingCart />
                        </button>
                        <div>
                            {totalProductsInCart > 0 && (
                                <div className="rounded-full p-1 w-8 flex justify-center -translate-x-3 -translate-y-3 text-[#9538E2] bg-white text-base">
                                    {totalProductsInCart}
                                </div>
                            )}
                        </div>
                    </NavLink>
                    <NavLink
                        className='flex'
                        to="/dashboard/wishlist">
                        <button className="border p-3 rounded-full">
                            <AiOutlineHeart />
                        </button>
                        <div>
                            {totalProductsInWishList > 0 && (
                                <div className="rounded-full p-1 w-8 flex justify-center -translate-x-3 -translate-y-3 text-[#9538E2] bg-white text-base">
                                    {totalProductsInWishList}
                                </div>
                            )}
                        </div>
                    </NavLink>
                </div>
            </div>
            <div>
                <div className='text-center text-white w-[72.72%] mx-auto'>
                    <h1 className='font-bold text-3xl lg:text-6xl mt-8 lg:mt-8'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='mt-6 text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className='mt-8 mb-44 lg:mb-[268px] text-[#9538E2] font-bold text-xl bg-white px-7 py-4 shadow-custom-inset rounded-[32px]'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeNavBar;
