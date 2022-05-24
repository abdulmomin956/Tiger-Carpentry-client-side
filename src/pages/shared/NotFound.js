import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex flex-col justify-center items-center'>
            <h1 className='text-8xl font-bold'>404</h1>
            <h4 className='text-4xl'>OPPS THE PAGE NOT FOUND</h4>
            <p>Sorry the page you are looking for doesn't exist. Go to <Link to='/' className='text-primary cursor-pointer'>Homepage</Link></p>
        </div>
    );
};

export default NotFound;