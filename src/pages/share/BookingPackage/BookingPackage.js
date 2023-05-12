import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './BookingPackage.css';

const BookingPackage = () => {
    const { packageId } = useParams();
    const [packageData, setPackageData] = useState([]);
  
    useEffect(() => {
      const url = `https://event-api.nurhossainfarid.com/v1/package/${packageId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPackageData(data.data);
        });
    }, [packageData]);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
      const onSubmit = (data) => {
        const orderPackage = {
          customerName: data.name,
          customerEmail: data.email,
          customerNumber: data.phone,
          customerAddress: data.address,
          packageName: data.packageName,
          packagePrice: data.packagePrice,
          organizerName: data.organizerName,
          date: data.date,
          time: data.time,
        };
        console.log(data);
        let url = "https://event-api.nurhossainfarid.com/v1/booking";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(orderPackage),
        })
        .then((res) => res.json())
          .then((result) => {
          console.log(result);
          if (result.status.toLowerCase() === "success") {
            toast.success("Package booking Successfully");
          } else {
            toast.error("Package could not booking successfully");
          }
        });
      };
    return (
        <div className=" bg-slate-100 pb-10">
        {/* Packages background and header */}
            <div className="orderPackage-bg relative">
            <div className="absolute bg-black w-full h-full opacity-60"></div>
            <div className="relative py-28 flex flex-col justify-center items-center gap-3">
                <h1 className="text-5xl text-white uppercase font-semibold">
                Booking
                </h1>
                <p className="text-white text-md">Booking Your Package</p>
            </div>
            </div>
        <div className='md:mx-10 lg:mx-28'>        
        <div className='grid grid-cols-2 gap-10'>
        <div>Animation</div>
        <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="grid grid-cols-2 gap-x-5"
        >
        {/* name */}
            <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Your Name</span>
          </label>
          <input
            type="text"
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
        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Email</span>
          </label>
          <input
            type="email"
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
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        {/* Phone */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Phone</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-xs"
            {...register("phone", {
              required: {
                value: true,
                message: "Phone is require",
              },
            })}
          />
          <label className="label">
            {errors.phone?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.phone.message}
              </span>
            )}
          </label>
        </div>
        {/* Address */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Address
            </span>
          </label>
          <input
            type="text"
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
        {/* Package Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Package Name</span>
          </label>
          <input
            type="text"
            value={packageData?.name}
            className="input input-bordered w-full max-w-xs"
            {...register("packageName", {
              required: {
                value: true,
                message: "Package name is require",
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
        {/* Package Price */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Package Price</span>
          </label>
          <input
            type="number"
            value={packageData?.price}
            className="input input-bordered w-full max-w-xs"
            {...register("packagePrice", {
              required: {
                value: true,
                message: "Package price is require",
              },
            })}
          />
          <label className="label">
            {errors.packagePrice?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.packagePrice.message}
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
            value={packageData?.organization?.name}
            className="input input-bordered w-full max-w-xs"
            {...register("organizerName", {
              required: {
                value: true,
                message: "Organization Name is require",
              },
            })}
          />
          <label className="label">
            {errors.organizerName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.organizerName.message}
              </span>
            )}
          </label>
        </div>
        {/* Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Event Date</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("date", {
              required: {
                value: true,
                message: "Date is require",
              },
            })}
          />
          <label className="label">
            {errors.date?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.date.message}
              </span>
            )}
          </label>
        </div>
        {/* Time */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Time</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("time", {
              required: {
                value: true,
                message: "Time is require",
              },
            })}
          />
          <label className="label">
            {errors.time?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.time.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-white w-1/2" value="registration">
            Confirm Order
          </button>
        </div>
        </form>    
        </div>
        </div>
    </div>
    );
};

export default BookingPackage;