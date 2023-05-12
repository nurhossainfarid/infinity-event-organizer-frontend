import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Feedback = () => {
    const { bookingRefId } = useParams();
    const [packageData, setPackageData] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const url = `http://localhost:5000/v1/booking/${bookingRefId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPackageData(data.data);
            })
    }, [packageData]);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
      const onSubmit = (data) => {
        const feedbackData = {
          bookingRefId: data.bookingRefId ? packageData?._id : data.bookingRefId,
          name: !data.name ? packageData?.customerName : data.name,
          email: !data.email ? packageData?.customerEmail : data.email,
          packageName: !data.packageName ? packageData?.packageName : data.packageName,
          organizerName: !data.organizerName ? packageData?.organizerName : data.organizerName,
          comment: data.comment,
          rating: data.rating,
          };
        let url = "http://localhost:5000/v1/feedback";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(feedbackData),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.status.toLowerCase() === "success") {
                toast.success("Feedback Added Successfully");
                navigate('/dashboard/userBookingHistory')
            } else {
              toast.error("Feedback could not added successfully");
            }
          });
      };
    return (
        <div className="mt-20 mx-28">
            <h1 className="text-center text-xl py-5">Customer Feedback</h1>
            <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="grid grid-cols-2"
        >
            {/* Booking Ref. Id */}
            <div className="form-control">
            <label className="label">
                <span className="label-text text-black text-lg">Booking Ref. Id</span>
            </label>
            <input
                type="text"
                value={packageData?._id}
                className="input input-bordered w-full max-w-xs"
                {...register("bookingRefId", {
                required: {
                    value: true,
                    message: "Name is require",
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
            {/* name */}
            <div className="form-control">
            <label className="label">
                <span className="label-text text-black text-lg">Name</span>
            </label>
            <input
                type="text"
                Value={packageData?.customerName}
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                required: {
                    value: true,
                    message: "Name is require",
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
                    type="text"
                    Value={packageData?.customerEmail}
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
            {/* packageName */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-black text-lg">Package Name($)</span>
                </label>
                <input
                    type="text"
                    Value={packageData?.packageName}
                    className="input input-bordered w-full max-w-xs"
                    {...register("packageName", {
                    required: {
                        value: true,
                        message: "packageName is require",
                    },
                    })}
                />
                <label className="label">
                    {errors.packageName?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                        {errors.packageName.message}
                    </span>
                    )}
                </label>
            </div>
            {/* Organization Name */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-black text-lg">
                    Organization Name
                    </span>
                </label>
                <input
                    type="text"
                    Value={packageData?.organizerName}
                    className="input input-bordered w-full max-w-xs"
                    {...register("organizationName", {
                    required: {
                        value: true,
                        message: "Organization Name is require",
                    },
                    })}
                />
                <label className="label">
                    {errors.organizationName?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                        {errors.organizationName.message}
                    </span>
                    )}
                </label>
            </div>
            {/* Comment */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-black text-lg">
                    Comment
                    </span>
                </label>
                <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    {...register("comment", {
                    required: {
                        value: true,
                        message: "Comment is require",
                    },
                    })}
                />
                <label className="label">
                    {errors.comment?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                        {errors.comment.message}
                    </span>
                    )}
                </label>
            </div>
            {/* Rating */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-black text-lg">
                    Rating
                    </span>
                </label>
                <input
                    type="number"
                    className="input input-bordered w-full max-w-xs"
                    {...register("rating", {
                    required: {
                        value: true,
                        message: "Rating is require",
                    },
                    })}
                />
                <label className="label">
                    {errors.rating?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                        {errors.rating.message}
                    </span>
                    )}
                </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-white w-1/2" value="registration">
                Submit
            </button>
            </div>
            </form>
        </div>
    );
};

export default Feedback;