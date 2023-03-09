import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="mx-28 mt-28 pb-16 flex gap-5">
      <h1>Welcome to your profile</h1>
      <Link to="/updateUser" className="btn btn-white">
        Edit Profile
      </Link>
    </div>
  );
};

export default Profile;
