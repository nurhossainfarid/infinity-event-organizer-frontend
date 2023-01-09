import React, { useEffect, useState } from "react";

const UserHistory = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://test-back-dep.vercel.app/v1/user";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      });
  }, []);
  // make admin
  const valueId = users?.map((user) => user._id);
  const id = valueId[0];
  const makeSuperAdmin = () => {
    console.log(id);
    fetch(`https://test-back-dep.vercel.app/v1/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
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
      <h1 className="dashboard-header text-3xl text-center animate-bounce">
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
                  <button className="btn btn-xs hover:btn-secondary">
                    Update
                  </button>
                  <button className="btn btn-xs hover:btn-secondary">
                    Delete
                  </button>
                </td>
                <td className="">
                  <div className="flex flex-col gap-2">
                    {user.role !== "Super Admin" && (
                      <button
                        onClick={makeSuperAdmin}
                        className="btn btn-xs hover:btn-secondary "
                      >
                        super Admin
                      </button>
                    )}
                    <button className="btn btn-xs hover:btn-secondary ">
                      Organizer Admin
                    </button>
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
