import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserHistory = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "https://event-api.nurhossainfarid.com/v1/user";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      });
  }, [users]);

  // navigate router
  const navigate = useNavigate();
  const navigateUser = (userId) => {
    navigate(`/updateUser/${userId}`);
  };

  // delete user
  const handleDelete = (id) => {
    const url = `https://event-api.nurhossainfarid.com/v1/user/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "success") {
          toast.success("User deleted successfully");
        } else {
          toast.error("User could not be deleted successfully");
        }
      });
  };

  // make super admin
  const makeSuperAdmin = (id) => {
    const updateRole = {
      role: "super admin",
    };
    fetch(`https://event-api.nurhossainfarid.com/v1/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateRole),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  // make organizer admin
  const makeOrganizerAdmin = (id) => {
    const updateRole = {
      role: "organizerAdmin",
    };
    fetch(`https://event-api.nurhossainfarid.com/v1/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateRole),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="mt-5">
      <h1 className="dashboard-header text-xl md:text-3xl text-center animate-bounce">
        Handle User
      </h1>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.contactNumber}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td className="flex flex-col gap-2">
                  <button
                    className="btn btn-xs hover:btn-secondary"
                    onClick={() => navigateUser(user?._id)}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-xs hover:btn-secondary"
                  >
                    Delete
                  </button>
                </td>
                <td className="">
                  <div>
                    {user.role === "user" && (
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => makeSuperAdmin(user._id)}
                          className="btn btn-xs hover:btn-secondary "
                        >
                          super Admin
                        </button>
                        <button
                          className="btn btn-xs hover:btn-secondary"
                          onClick={() => makeOrganizerAdmin(user._id)}
                        >
                          Organizer Admin
                        </button>
                      </div>
                    )}
                    {user.role === "organizeradmin" && (
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => makeSuperAdmin(user._id)}
                          className="btn btn-xs hover:btn-secondary "
                        >
                          super Admin
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserHistory;
