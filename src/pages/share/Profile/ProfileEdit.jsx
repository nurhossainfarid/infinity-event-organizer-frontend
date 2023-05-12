import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProfileEdit = () => {
    const [userData, setUserData] = useState([]);
    const { userId } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/v1/user/${userId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setUserData(data.data);
            })
    }, [userData]);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = async (data) => {
        const updatedData = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          contactNumber: data.phone,
          address: data.address,
        };
        const url = `http://localhost:5000/v1/user/${userId}`;
        fetch(url, { 
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedData),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.status.toLowerCase() === 'success') {
                    toast.success('Your profile updated successfully.')
                } else {
                    toast.error('Your profile could not be updated')
                }
            })
      };
    return (
        <div className='bg-purple-700 pt-20'>
            <div className="mx-32 bg-white">
                <h1 className="text-center py-5 text-2xl">Profile Edit</h1>
                <div className='mx-28 flex gap-20 pb-8'>
                    <div className='flex flex-col gap-5 items-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLja_b1nZD7bzgvwtJ0JlhlQaKR3ModNySg&usqp=CAU" />
                            </div>
                        </div>
                        <button className="btn bg-purple-600 text-white hover:bg-fuchsia-600">Upload 
                         Photo</button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                            <div className="grid grid-cols md:grid-cols-2 gap-1 md:gap-3 mt-2">
                            {/* first name */}
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text text-black text-base">
                                    First Name
                                </span>
                                </label>
                                <input
                                Value={userData.firstName}
                                type="text"
                                className="input input-bordered w-full max-w-xs text-sm md:text-md bg-transparent 
                                border-black text-black"
                                {...register("firstName", {
                                    required: {
                                    value: true,
                                    message: "First Name is require",
                                    },
                                })}
                                />
                            </div>
                            {/* last name */}
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text text-black text-base">
                                    Last Name
                                </span>
                                </label>
                                <input
                                type="text"
                                Value={userData.lastName}
                                className="input input-bordered w-full max-w-xs bg-transparent 
                                border-black text-black"
                                {...register("lastName", {
                                    required: {
                                    value: true,
                                    message: "Last Name is require",
                                    },
                                })}
                                />
                                <label className="label">
                                {errors.lastName?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                    {errors.lastName.message}
                                    </span>
                                )}
                                </label>
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text text-black text-base">Email(Email Address cannot be 
                                changed)</span>
                                </label>
                                <input
                                type="email"
                                disabled
                                Value={userData.email}
                                className="input input-bordered w-full max-w-xs bg-transparent 
                                border-black text-black"
                                {...register("email", {
                                    pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Provide a valid email",
                                    },
                                })}
                                />
                                <label className="label">
                                {errors.email?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                    {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text-alt text-red-500">
                                    {errors.email.message}
                                    </span>
                                )}
                                </label>
                            </div>
                            {/* phone */}
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text text-black text-base">Phone</span>
                                </label>
                                <input
                                type="phone"
                                Value={userData.contactNumber}
                                className="input input-bordered w-full max-w-xs bg-transparent 
                                border-black text-black"
                                {...register("phone", {
                                    required: {
                                    value: true,
                                    message: "Phone is require",
                                    },
                                    maxLength: 11,
                                    minLength: 11,
                                })}
                                />
                                <label className="label">
                                {errors.phone?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                    {errors.address.message}
                                    </span>
                                )}
                                </label>
                            </div>
                            {/* address */}
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text text-black text-base">Address</span>
                                </label>
                                <input
                                type="text"
                                Value={userData.address}
                                className="input input-bordered w-full max-w-xs bg-transparent 
                                border-black text-black"
                                {...register("address", {
                                    required: {
                                    value: true,
                                    message: "Address is require",
                                    },
                                })}
                                />
                                <label className="label">
                                {errors.address?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                    {errors.address.message}
                                    </span>
                                )}
                                </label>
                            </div>
                            </div>
                            <div className="form-control flex flex-col justify-center items-center mt-5">
                            <button
                                className="btn btn-white bg-purple-600 text-white md:w-1/3 hover:bg-pink-500 
                                 ease-in duration-300 hover:scale-105 text-sm md:text-lg border-none"
                                value="save"
                            >
                                Save
                            </button>
                            </div>
                    </form>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;