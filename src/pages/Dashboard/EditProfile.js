import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import LoadSpinner from '../shared/LoadSpinner';

const EditProfile = ({ user, isTrue }) => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const userDetail = useQuery(['userDetail', user?.email], () => fetch(`https://secure-harbor-92010.herokuapp.com/userDetail/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (userDetail.isLoading) {
        <div className='h-screen flex justify-center items-center'>
            <LoadSpinner></LoadSpinner>
        </div>
    }


    const onSubmit = async data => {
        const detail = {
            name: user.displayName,
            email: user.email,
            level: data.level,
            degree: data.degree,
            institute: data.institute,
            year: data.year,
            mobile: data.mobile,
            address: data.address
        }

        fetch(`https://secure-harbor-92010.herokuapp.com/userDetail/${user.email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(detail)
        })
            .then(res => res.json())
            .then(result => console.log(result))

        navigate('/dashboard/my-profile')
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="col-md-8 col-lg-9 pl-md-5 pb-5 pt-3 w-1/2 mx-auto">
            <div className="form-group">
                <label htmlFor="FullName">Full name <span className="text-secondary">(Name cannot be changed)</span></label>
                <div>
                    <input type="text" name="fullName" className="form-control input input-bordered" disabled defaultValue={user.displayName} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address <span className="text-secondary">(Email Address cannot be changed)</span>
                </label>
                <input type="text" disabled className="form-control input input-bordered" defaultValue={user.email} />
            </div>
            <div className="form-group">
                <label > Phone number</label>
                <input {...register("mobile")} type="text" className="form-control input input-bordered" placeholder='mobile' defaultValue={userDetail?.data?.mobile} />
            </div>

            <div className='form-group'>
                <div className="form-group">
                    <label > Full Address</label>
                    <div>
                        <input {...register("address")} type="text" className="form-control input input-bordered" placeholder='address' defaultValue={userDetail?.data?.address} />
                    </div>
                </div>

            </div>
            <div className='card'>
                <h1 className='text-3xl'>Education</h1>
                <div className="form-group">
                    <label >Education Level</label>
                    <div>
                        <input {...register("level")} type="text" className="form-control input input-bordered" placeholder='level' defaultValue={userDetail?.data?.level} />
                    </div>
                </div>
                <div className="form-group">
                    <label >Degree Title</label>
                    <div>
                        <input {...register("degree")} type="text" className="form-control input input-bordered" placeholder='degree' defaultValue={userDetail?.data?.degree} />
                    </div>
                </div>
                <div className="form-group">
                    <label >Institute</label>
                    <div>
                        <input {...register("institute")} type="text" className="form-control input input-bordered" placeholder='Institute' defaultValue={userDetail?.data?.institute} />
                    </div>
                </div>
                <div className="form-group">
                    <label >Year</label>
                    <div>
                        <input {...register("year")} type="text" className="form-control input input-bordered" placeholder='year' defaultValue={userDetail?.data?.year} />
                    </div>
                </div>
                <div className="form-group text-right"><button className="btn btn-rounded" >Save changes</button>
                </div>

            </div>

        </form>
    );
};

export default EditProfile;