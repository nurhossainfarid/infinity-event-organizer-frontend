import React, { useEffect, useState } from "react";

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
  return (
    <div className="mr-28">
      <h1 className="text-3xl text-center text-secondary font-semibold animate-pulse">
        Wedding Packages
      </h1>
      <div className="mt-8 grid grid-cols-2 gap-16">
        {packageData.map((pack) =>
          pack.eventName === "wedding" ? (
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
                    <button className="border-2 border-secondary btn text-secondary text-md hover:bg-pink-500 hover:border-pink-500 hover:text-white animate-bounce ease-in duration-300">
                      Booking Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-3xl text-green-500">
              Package Available As soon As possible
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Wedding;
