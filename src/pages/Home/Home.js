import React from 'react';
import { useQuery } from 'react-query';
import Banner from './Banner';
import Reviews from './Reviews';
import Tools from './Tools';


const Home = () => {
    const productData = useQuery('products', () => fetch('http://localhost:5000/products')
        .then(res => res.json()))
    const allProducts = productData.data;
    return (
        <main>
            <Banner></Banner>
            <section className='hero min-h-screen bg-base-200'>
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
            <Reviews></Reviews>

        </main>
    );
};

export default Home;