import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const url = `https://event-api.nurhossainfarid.com/v1/user/${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);
      });
  }, [userData]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const updateUser = {
      firstName: !data.firstName ? userData.firstName : data.firstName,
      lastName: !data.lastName ? userData.lastName : data.lastName,
      contactNumber: !data.contactNumber
        ? userData.contactNumber
        : data.contactNumber,
      address: !data.address ? userData.address : data.address,
      status: !data.status ? userData.status : data.status,
    };
    console.log(updateUser);
    let url = `https://event-api.nurhossainfarid.com/v1/user/${userId}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="mx-28 mt-28">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="grid grid-cols-2 gap-5"
      >
        {/*first name */}
        <div className="form-control">
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">First Name</span>
            </label>
            <input
              type="text"
              Value={userData?.firstName}
              className="input input-bordered w-full max-w-xs"
              {...register("firstName")}
            />
          </div>
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        {/*last name */}
        <div className="form-control">
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Last Name</span>
            </label>
            <input
              type="text"
              Value={userData?.lastName}
              className="input input-bordered w-full max-w-xs"
              {...register("lastName")}
            />
          </div>
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
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Email</span>
            </label>
            <input
              type="email"
              value={userData?.email}
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
            />
          </div>
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
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Phone</span>
            </label>
            <input
              type="phone"
              Value={userData?.contactNumber}
              className="input input-bordered w-full max-w-xs"
              {...register("contactNumber", {
                maxLength: 11,
                minLength: 11,
              })}
            />
          </div>
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
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Address</span>
            </label>
            <input
              type="text"
              Value={userData?.address}
              className="input input-bordered w-full max-w-xs"
              {...register("address")}
            />
          </div>
          <label className="label">
            {errors.address?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.address.message}
              </span>
            )}
          </label>
        </div>
        {/* status */}
        <div className="form-control">
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Status</span>
            </label>
            <input
              type="text"
              Value={userData?.status}
              className="input input-bordered w-full max-w-xs"
              {...register("status")}
            />
          </div>
          <label className="label">
            {errors.menu?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.menu.message}
              </span>
            )}
          </label>
        </div>
        <div>
          <button className="btn btn-white w-1/2">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
