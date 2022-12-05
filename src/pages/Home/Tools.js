import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = ({ product }) => {
    const { name, short, price, image, minOrder, availableQty, _id } = product;
    const navigate = useNavigate()
    const handleOrder = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className='px-5 py-10 block'>
            <div className='card w-72 bg-base-100 shadow-xl h-full'>
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h1 className='card-title'>{name}</h1>
                    <p>{short}</p>
                    <p style={{ color: 'green' }}>{price} $/piece</p>
                    <p>{minOrder}pcs (min order)</p>
                    <p>{availableQty}pcs (Available)</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleOrder(_id)} className="btn btn-primary">Make An Order</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tools;