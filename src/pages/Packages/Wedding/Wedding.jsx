import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// reveal animation
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';

const Wedding = () => {
  // const {name, organization, price, time, attend, eventName} = packing;
  const [packageData, setPackageData] = useState([]);

  useEffect(() => {
    const url = "https://event-api.nurhossainfarid.com/v1/package";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPackageData(data.data);
      });
  }, []);
  const navigate = useNavigate();
  const navigatePackage = (packageId) => {
    navigate(`/bookingPackage/${packageId}`)
  }
  return (
    <div className="mr-28">
      <h1 className="text-3xl text-center text-secondary font-semibold">
        <Roll bottom cascade>
          Wedding Packages
        </Roll>
      </h1>
      <Flip top cascade>
        <div className="mt-8 grid grid-cols-3 gap-5">
          {packageData.map((pack) =>
            pack.eventName === "wedding" && (
              <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="https://placeimg.com/400/225/arch"
                      className="w-full"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{pack.name}</h2>
                    <h3>Price: {pack.price}</h3>
                    <h3>Time: {pack.time}</h3>
                    <h3>Attendant: {pack.attend}</h3>
                    <h3>Food Items: {pack.foodMenu}</h3>
                    <h2>{pack.organization.name}</h2>
                    <div className="card-actions justify-end">
                      <button onClick={() => navigatePackage(pack._id)} className="border-2 border-secondary btn 
                      text-secondary text-md bg-white hover:bg-pink-500 hover:border-pink-500 hover:text-white
                      ease-in duration-300">
                        Booking Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Flip>
    </div>
  );
};

export default Wedding;
