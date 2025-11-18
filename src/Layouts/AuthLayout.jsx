import React from 'react';
import { Outlet } from 'react-router';
import navImg from '../assets/group.png'
import authImg from '../assets/authImage.png'
import Container from '../components/Container';

const AuthLayout = () => {
    return (
        <Container>
        <div>
            <img src={navImg} alt="" />
            <div className='flex justify-between'>
                <div className='w-1/2'>
                    <Outlet />
                </div>
                <div className='bg-[#fafdf0]'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
        </Container>
    );
};

export default AuthLayout;