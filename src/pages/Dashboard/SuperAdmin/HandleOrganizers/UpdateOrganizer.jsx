import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateOrganizer = () => {
    const { orgId } = useParams();
    const [orgData, setOrgData] = useState([]);
    useEffect(() => {
        const url = `https://infinity-event-organizer-backend.vercel.app/v1/organization/${orgId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setOrgData(data.data);
            })
    }, [orgData])

    // use form for update
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      const addOrganizer = {
        name: data.name,
        email: data.email,
        contactNumber: data.contactNumber,
        address: data.address,
        image: data.image,
        status: data.status,
      };
      let url = `https://infinity-event-organizer-backend.vercel.app/v1/organization/${orgId}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addOrganizer),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
    };
    return (
        <div className="mx-28 mt-28 mb-10">
            <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="grid grid-cols-2"
            >
            {/* name */}
            <div className="form-control">
                <label className="label">
                <span className="label-text text-black text-lg">Organizer Name</span>
                </label>
                <input
                type="text"
                Value={orgData?.name}
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                    required: {
                    value: true,
                    message: "Organizer Name is require",
                    },
                })}
                />
                <label className="label">
                {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                    {errors.name.message}
                    </span>
                )}
                </label>
            </div>
            {/* email */}
            <div className="form-control">
                <label className="label">
                <span className="label-text text-black text-lg">Email</span>
                </label>
                <input
                type="email"
                Value={orgData?.email}
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                    required: {
                    value: true,
                    message: "Email is require",
                    },
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
                <span className="label-text text-black text-lg">Contact Number</span>
                </label>
                <input
                type="phone"
                Value={orgData?.contactNumber}
                className="input input-bordered w-full max-w-xs"
                {...register("contactNumber", {
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
                <span className="label-text text-black text-lg">Address</span>
                </label>
                <input
                type="text"
                Value={orgData?.address}
                className="input input-bordered w-full max-w-xs"
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
            {/* Image */}
            <div className="form-control">
                <label className="label">
                <span className="label-text text-black text-lg">Image</span>
                </label>
                <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                    required: {
                    value: true,
                    message: "Image is require",
                    },
                })}
                />
                <label className="label">
                {errors.image?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                    {errors.image.message}
                    </span>
                )}
                </label>
            </div>
            {/* status */}
            <div className="form-control">
                <label className="label">
                <span className="label-text text-black text-lg">Status</span>
                </label>
                <input
                type="text"
                Value={orgData?.status}
                className="input input-bordered w-full max-w-xs"
                {...register("status", {
                    required: {
                    value: true,
                    message: "Status is require",
                    },
                })}
                />
                <label className="label">
                {errors.menu?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                    {errors.menu.message}
                    </span>
                )}
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary w-1/2" value="registration">
                    Update
                </button>
            </div>
            </form>
        </div>
    );
};

export default UpdateOrganizer;