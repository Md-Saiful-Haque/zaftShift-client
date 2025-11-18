import React from 'react';
import Banner from '../components/Banner';
import Brands from '../components/Brands';
import Reviews from '../components/Reviews';

const reviewsPromise = fetch('./reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner />
            <Brands />
            <Reviews reviewsPromise={reviewsPromise}/>
        </div>
    );
};

export default Home;