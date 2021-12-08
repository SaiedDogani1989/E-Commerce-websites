import React from 'react';
import AdvertiseSlider from './AdvertiseSlider/AdvetiseSlider';
import Advertise from './categoryCards/advertise/Advertise';
import Categories from './categoryCards/Categories';
import EleDeals from './Deals/EleDeals';
import SlidShow from './slideShow/SlideShow';
import SpecialOffers from './specialOffer/SpecialOffer';
import "./style/home.css"


const Home = () => {
    return (
        <>
            <SlidShow />
            {/* <!-- Categories   --> */}

            <Categories />
            {/* <!-- special Offers --> */}
            <SpecialOffers />

            {/* <!-- advertise banner --> */}

            <Advertise />

            {/* <!-- Slider advertiser --> */}
            <AdvertiseSlider />
            {/* <!-- deal in technology --> */}
            <EleDeals />


        </>
    );
}

export default Home;