import React from 'react';
import bannerBg from '../../images/bannerHome.jpg'

const Banner = () => {
    return (
        <div className='hero justify-start lg:px-40  min-h-[90vh]' style={{ background: `url(${bannerBg})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            <div className="hero-content text-center lg:text-left text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Welcome to TIGER CARPENTRY</h1>
                    <p className="mb-5 text-white">We offer quality wood working and metal working tools. Our products are designed to give you years of service and make your next project easier and faster than you can do it without them.</p>
                    <a href='#product' className="btn btn-primary">Our Products</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;