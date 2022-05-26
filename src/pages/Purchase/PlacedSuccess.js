import React from 'react';
import { Link } from 'react-router-dom';

const PlacedSuccess = ({ success, props }) => {
    if (!success) {
        return <div className='flex flex-col justify-center items-center min-h-screen bg-base-200'>
            <h1 className=' block text-green-500 font-bold text-6xl mb-3'>You've nothing done</h1>

        </div>
    }
    if (props === 'purchase') {
        return (
            <div className='flex flex-col justify-center items-center min-h-screen bg-base-200'>
                <h1 className=' block text-green-500 font-bold text-6xl mb-3'>Congrats!</h1>
                <h1 className='font-bold'>You have successfully placed the order. Please check the <Link className='text-primary' to='/dashboard/'>My Order Page</Link> to complete the payment</h1>

            </div>
        );
    }

};

export default PlacedSuccess;