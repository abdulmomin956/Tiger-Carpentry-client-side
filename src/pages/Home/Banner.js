import React from 'react';
import bannerBg from '../../images/bannerHome.jpg'

const Banner = () => {
    return (
        <div className='hero justify-start lg:px-40  min-h-screen' style={{ background: `url(${bannerBg})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            <div className="hero-content text-center lg:text-left text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
                    <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <a href='#product' className="btn btn-primary">Our Products</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;