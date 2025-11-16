import React from 'react';
import footerImg from '../../assets/group.png'
import { Link } from 'react-router';
import Container from '../../components/Container';

const Footer = () => {
    return (
        <div>
            <Container>
                <div className='bg-black text-white rounded-4xl'>
                    <div className='flex justify-center items-center pt-16'>
                        <img src={footerImg} alt="" />
                    </div>
                    <p className='mb-8 text-center mt-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <div className='border-dashed border-t border-b'>
                        <div className='mt-8 flex justify-center gap-5 mb-8'>
                            <Link>Services</Link>
                            <Link>Coverage</Link>
                            <Link>About Us</Link>
                            <Link>Pricing</Link>
                            <Link>Blog</Link>
                            <Link>Contact</Link>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <Link>Facebook</Link>
                        <Link></Link>
                        <Link></Link>
                    </div>
                </div>
                </Container>
        </div>
    );
};

export default Footer;