import React from "react";
import { Outlet } from "react-router-dom";
import AboutCustomLink from "../About/AboutCustomLink";

// custom css
import "./Packages.css";

const Packages = () => {
  // const [treatment, setTreatment] = useState([]);

  // const { isLoading, refetch, data: booking } = useQuery('packaging', () => {
  //     fetch(`https://test-back-dep.vercel.app/v1/package`)
  //     .then(res => res.json())
  // }
  // )
  // const packageData = booking.data;
  // fetch(`https://test-back-dep.vercel.app/v1/package`)
  // .then(res => res.json())
  // .then(data => {
  //     let packageData = data.data;
  //     console.log(packageData);
  // })

  // const [packageData, setPackageData] = useState([]);

  // useEffect(() => {
  //     const url = 'https://test-back-dep.vercel.app/v1/package';
  //     fetch(url)
  //         .then(res => res.json())
  //         .then(data => {
  //             setPackageData(data.data);
  //             console.log(data.data.length);
  //             console.log(packageData);
  //         })
  // }, []);

  return (
    <div className=" bg-slate-100 pb-10">
      {/* Packages background and header */}
      <div className="packages-bg relative">
        <div className="absolute bg-black w-full h-full opacity-60"></div>
        <div className="relative py-28 flex flex-col justify-center items-center gap-3">
          <h1 className="text-5xl text-primary uppercase font-semibold">
            Packages
          </h1>
          <p className="text-primary text-md">What Do You Want!</p>
        </div>
      </div>
      <div>
        {/* {
                    packageData.map((book) => <h1>Length: {book.length}</h1>)
                } */}
        <h1 className="text-5xl packages-header text-center py-5">
          All Packages Here
        </h1>
      </div>
      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content bg-slate-100 flex flex-col pt-16 px-10">
          {/* {
                    packageData.map(pack => 
                        // <Wedding packing={pack} key={pack._id} setPackageData={setPackageData}></Wedding>
                    )
                } */}
          <Outlet />
        </div>
        <div class="drawer-side mt-10">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu pl-10 pt-16 overflow-y-auto w-80 text-primary gap-10 ml-28 bg-pink-500">
            {/* <!-- Sidebar content here --> */}
            <AboutCustomLink
              className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button"
              to="/packages"
            >
              Wedding
            </AboutCustomLink>
            <AboutCustomLink
              className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button"
              to="/packages/birthdayParties"
            >
              Birthday Parties
            </AboutCustomLink>
            <AboutCustomLink
              className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button"
              to="/packages/holidayPartiesPackages"
            >
              Holiday Parties
            </AboutCustomLink>
            <AboutCustomLink
              className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button"
              to="/packages/privateParties"
            >
              Private Parties
            </AboutCustomLink>
            <AboutCustomLink
              className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button"
              to="/packages/corporateFunction"
            >
              Corporate Function
            </AboutCustomLink>
            <AboutCustomLink
              className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button"
              to="/packages/concerts"
            >
              Concerts
            </AboutCustomLink>
            <AboutCustomLink
              className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button"
              to="/packages/anniversariesPackages"
            >
              Anniversaries
            </AboutCustomLink>
            <AboutCustomLink
              className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button"
              to="/packages/comparePackage"
            >
              Compare Package
            </AboutCustomLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Packages;
