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
    const decision = window.confirm("Will you remove this user?");
    if (decision) {  
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.status.toLowerCase() === "success") {
            toast.success("User deleted successfully");
          } else {
            toast.error("User could not be deleted successfully");
          }
        });
    }
  };

  // make super admin
  const makeSuperAdmin = (id) => {
    const updateRole = {
      role: "super admin",
    };
    const decision = window.confirm("Will you update this user role?");
    if (decision) {  
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
          // if (result.status.toLowerCase() === "success") {
          //   toast.success("Organizer delete successfully");
          // } else {
          //   toast.error("Organizer could not delete successfully");
          // }
        });
    }
  };

  // make organizer admin
  const makeOrganizerAdmin = (id) => {
    const updateRole = {
      role: "organizerAdmin",
    };
    const decision = window.confirm("Will you update this user role?");
    if (decision) {   
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
    }
  };
  return (
    <div className="mt-5">
      <div className="overflow-x-auto mt-5">
        <p className='text-lg'>Click the <span className="text-purple-600 font-semibold">"Details" </span> 
           Button to Know about user details, also update or delete a user and change user role.</p>
        <table className="table w-full">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.contactNumber}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td className="flex flex-col gap-2">
                    {/* The button to open modal */}
                  <label htmlFor={user?._id} className="btn btn-xs 
                    hover:btn-secondary">Details</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id={user?._id} className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box w-6/12 max-w-5xl">
                        <label htmlFor={user?._id} className="btn btn-sm btn-circle absolute right-2 
                      top-2">✕</label>
                        <div className="grid grid-cols-2 gap-5">
                          <p className="text-lg"><span className="font-semibold text-sm">First Name : </span> 
                           {user?.firstName} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Last Name : </span> 
                           {user?.lastName} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Email : </span> 
                           {user?.email} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Phone : </span> 
                           {user?.contactNumber}  
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Address : </span> 
                           {user?.address} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Role : </span> 
                           {user?.role} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Status : </span> 
                           {user?.status}  
                           </p>
                      </div>
                      <div className="flex justify-evenly mt-10">
                        <div className="">
                          <p className="text-center my-2">Make Admin</p>
                            {user.role === "user" && (
                              <div className="flex gap-3">
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
                        <div className="">
                          <p className="text-center my-2">Action</p>
                          <div className="flex gap-3">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="">
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
