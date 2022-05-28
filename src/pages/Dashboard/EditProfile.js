import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

const EditProfile = ({ user }) => {
    const { register, handleSubmit, reset } = useForm();

    const userDetail = useQuery(`userDetail`, () => fetch(`http://localhost:5000/userDetail/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(user);
    // const onSubmit = async data => {
    // console.log(data);
    // fetch(`http://localhost:5000/userDetail/${user.email}`, {
    //     method: 'PUT',
    //     headers: {
    //         "Content-Type": "applicaion/json",
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     },
    //     body: JSON.stringify(data)
    // })
    //     .then(res => res.json())
    //     .then(result => console.log(result))

}
return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-md-8 col-lg-9 pl-md-5 pb-5 pt-3 w-1/2 mx-auto">
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
            <label >Phone</label>
            <input {...register("mobile")} type="text" name="phone" className="form-control input input-bordered" defaultValue={userDetail?.mobile} />
        </div>

        <div className='form-group'>
            <h1 className='text-3xl'>Address</h1>
            <div className="form-group">
                <label > Full Address</label>
                <div>
                    <input {...register("address")} type="text" name="fullName" className="form-control input input-bordered" placeholder='Full Address' defaultValue={userDetail?.address} />
                </div>
            </div>

        </div>
        <div className='form-group'>
            <h1 className='text-3xl'>Education</h1>
            <div className="form-group">
                <label >Education Level</label>
                <div>
                    <input {...register("level")} type="text" className="form-control input input-bordered" placeholder='level' defaultValue={userDetail?.level} />
                </div>
            </div>
            <div className="form-group">
                <label >Degree Title</label>
                <div>
                    <input {...register("degree")} type="text" className="form-control input input-bordered" placeholder='degree' defaultValue={userDetail?.degree} />
                </div>
            </div>
            <div className="form-group">
                <label >Institute</label>
                <div>
                    <input {...register("institute")} type="text" className="form-control input input-bordered" placeholder='Institute' defaultValue={userDetail?.institute} />
                </div>
            </div>
            <div className="form-group">
                <label >Year</label>
                <div>
                    <input {...register("year")} type="text" className="form-control input input-bordered" placeholder='year' defaultValue={userDetail?.year} />
                </div>
            </div>
            <div className="form-group text-right"><button className="btn btn-rounded" disabled="">Save changes</button>
            </div>

        </div>

    </form>
);
};

export default EditProfile;