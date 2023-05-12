import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useUserRole from "../CustomHooks/useUserRole";
import './Profile.css';

const Profile = () => {
  const [user] = useAuthState(auth);
  const [userDetails] = useUserRole(user);
  const navigate = useNavigate();
  const navigateProfile = (userId) => {
    navigate(`/profileEdit/${userId}`);
  }

  return (
    <div className="profile-container py-20">
      <div className="mx-28 pb-16  bg-white">
        <h1 className="text-2xl semibold text-center">Welcome to your profile</h1>
        <div className="flex gap-20 mt-10 ml-10">
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-sm font-semibold">First Name</h2>
              <p className="text-xl font-semibold">{userDetails.firstName}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Last Name</h2>
              <p className="text-xl font-semibold">{userDetails.lastName}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Email</h2>
              <p className="text-xl font-semibold">{userDetails.email}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Phone</h2>
              <p className="text-xl font-semibold">{userDetails.contactNumber}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Address</h2>
              <p className="text-xl font-semibold">{userDetails.address}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Status</h2>
              <p className="text-xl font-semibold">{userDetails.status}</p>
            </div>
          </div>
          <div className='flex flex-col gap-5 items-center'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLja_b1nZD7bzgvwtJ0JlhlQaKR3ModNySg&usqp=CAU" />
                </div>
            </div>
            <button onClick={() => navigateProfile(userDetails._id)} className="btn bg-purple-600 text-white 
            hover:bg-fuchsia-600">
                Edit Profile
              </button>
                      </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
