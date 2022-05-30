import React from 'react';
import { useQuery } from 'react-query';
import Banner from './Banner';
import News from './News';
import Reviews from './Reviews';
import Tools from './Tools';


const Home = () => {
    const productData = useQuery('products', () => fetch('https://secure-harbor-92010.herokuapp.com/products')
        .then(res => res.json()))
    const allProducts = productData.data;
    return (
        <main>
            <Banner></Banner>
            <section id='product' className='hero min-h-screen bg-base-200'>
                <div className='hero-content flex-col w-full md:w-4/5'>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Main Products</h1>
                    </div>
                    <div className='flex flex-wrap gap-10 justify-center'>
                        {
                            allProducts?.map(product => <Tools key={product._id} product={product}></Tools>)
                        }
                    </div>
                </div>
            </section>
            <div>
                <div className=' text-center my-12'>
                    <h1 className='text-3xl text-primary font-bold'>Millions Business trust us</h1>
                    <h3 className='text-xl text-gray-600'>Try to understand users expectation</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-20 mb-12 '>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        <h1 className='font-bold text-3xl text-gray-600'>333K+</h1>
                        <h3 className='text-2xl'>Reviews</h3>
                    </div>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                        <h1 className='font-bold text-3xl text-gray-600'>50</h1>
                        <h3 className='text-2xl'>Countries</h3>
                    </div>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 text-primary w-20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        <h1 className='font-bold text-3xl text-gray-600'>100+</h1>
                        <h3 className='text-2xl'>Customers</h3>
                    </div>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                        <h1 className='font-bold text-3xl text-gray-600'>120M+ </h1>
                        <h3 className='text-2xl'>Annual revenue</h3>
                    </div>
                </div>
            </div>
            <News></News>
            <Reviews></Reviews>

        </main>
    );
};

export default Home;