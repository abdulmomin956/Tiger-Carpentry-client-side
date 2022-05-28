import React from 'react';
import { useQuery } from 'react-query';
import LoadSpinner from '../shared/LoadSpinner';

const Reviews = () => {
    const reviews = useQuery('reviews', () => fetch('https://secure-harbor-92010.herokuapp.com/reviews').then(res => res.json()))
    // console.log(reviews);
    // const { name, short, rating } = reviews.data
    if (reviews.isLoading) {
        return <div className='h-screen flex justify-center items-center'>
            <LoadSpinner></LoadSpinner>
        </div>
    }
    return (
        <div className='bg-base-100 lg:px-32 flex  gap-5 py-10'>
            {
                reviews.data.map((review, index) => <div key={index} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>{review.short}</p>
                        <h2 className="card-title text-yellow-500">{review.rating} STAR</h2>
                        <div className="card-actions justify-end">
                            <span className="">1 day ago</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Reviews;