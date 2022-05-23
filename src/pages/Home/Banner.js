import React from 'react';
import bannerBg from '../../images/bannerHome.jpg'

const Banner = () => {
    return (
        <div style={{ background: `url(${bannerBg})`, height: '70vh', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <h1>This is banner</h1>
        </div>
    );
};

export default Banner;