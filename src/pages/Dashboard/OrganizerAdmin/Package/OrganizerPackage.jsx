import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const OrganizerPackage = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [organizer, setOrganizer] = useState();
  useEffect(() => {
    const url = `https://event-api.nurhossainfarid.com/v1/organization/email/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrganizer(data.data);
      });
  }, [organizer]);
  return (
    <div className="mt-5">
      <div className="flex justify-between mt-5">
        <h1 className="text-3xl text-center mb-10 dashboard-header">
          Handle Package
        </h1>
        <button className="btn btn-outline btn-secondary animate-bounce text-lg">
          Add Package
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
              <th>Package Img</th>
              <th>Extra Service</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {organizer?.packages.map((pack) => (
              <tr>
                <td>{pack?.name}</td>
                <td>{pack?.price}</td>
                <td>{pack?.time}</td>
                <td>{pack?.attend}</td>
                <td>{organizer?.name}</td>
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

export default OrganizerPackage;
