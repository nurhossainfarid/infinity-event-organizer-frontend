import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HandlePackges = () => {
  const [packageData, setPackageData] = useState([]);
  // const [deletePackage, setDeletePackage] = useState(null);

  useEffect(() => {
    const url = "https://test-back-dep.vercel.app/v1/package";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPackageData(data.data);
      });
  }, []);

  // const valueId = packageData?.map((pack) => pack._id);
  // const id = valueId[0];

  // useEffect(() => {
  //   const url = `https://test-back-dep.vercel.app/v1/package/${id}`;
  //   fetch(url, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPackageData(data.data);
  //     });
  // }, []);
  return (
    <div className="mt-5">
      <div className="flex justify-between mt-5">
        <h1 className="text-3xl text-center mb-10 dashboard-header">
          Handle Package
        </h1>
        <button className="btn btn-outline btn-secondary animate-bounce text-lg">
          <Link to="/dashboard/createPackage">Add Package</Link>
        </button>
      </div>
      <div className="overflow-x-auto mt-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Time</th>
              <th>People</th>
              <th>Organizers</th>
              <th>Category</th>
              <th>Status</th>
              <th>Package Img</th>
              <th>Extra Service</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((pack) => (
              <tr>
                <td>{pack.name}</td>
                <td>${pack.price}</td>
                <td>{pack.time}</td>
                <td>{pack.attend}</td>
                <td>{pack.organization.name}</td>
                <td>{pack.category}</td>
                <td>{pack.status}</td>
                <td>Null</td>
                <td>
                  Decoration, <br />
                  Catering{" "}
                </td>
                <td className="flex flex-col gap-2">
                  <button className="btn btn-xs hover:btn-secondary">
                    Update
                  </button>
                  <button className="btn btn-xs hover:btn-secondary">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HandlePackges;
