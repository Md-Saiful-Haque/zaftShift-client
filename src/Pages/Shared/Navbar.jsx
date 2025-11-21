import React from 'react';
import navImg from '../../assets/group.png'
import Container from '../../components/Container';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    const link = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink>Service</NavLink></li>
        <li><NavLink to={'/coverage'}>Coverage</NavLink></li>
        <li><NavLink>About Us</NavLink></li>
        <li><NavLink>Pricing</NavLink></li>
        <li><NavLink to={'/send-parcel'}>Send Parcel</NavLink></li>
        <li><NavLink>Be a Rider</NavLink></li>

        {
            user && <>
             <li><NavLink to={'/dashboard/my-parcels'}>My Parcels</NavLink></li>
            </>
        }
    </>
    return (
        <Container>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <img src={navImg} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex"> 
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2.5">
                    {
                        user ? <Link><button onClick={handleLogOut} className='border-gray-400 btn py-3 px-8 rounded-xl'>LogOut</button></Link> : <Link to={'/login'}><button className='border-gray-400 py-3 px-8 rounded-xl btn'>LogIn</button></Link>
                    }
                    <Link to={'/rider'}><button className='bg-primary py-3 px-8 rounded-xl'>Be a rider</button></Link>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;