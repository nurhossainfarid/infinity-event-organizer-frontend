import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// import custom css
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
              <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content bg-slate-100 flex flex-col pt-20 px-5">
                    <h2 className='text-3xl text-secondary font-bold'> Super Admin DashBoard</h2>
                <Outlet/>
                </div> 
                <div class="drawer-side mt-16">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
                    <ul class="menu p-4 overflow-y-auto w-80 bg-secondary text-primary">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">All Package</Link></li>
                        <li><Link to="/dashboard/handleOrganizer">Organizer</Link></li>
                        <li><Link to="/dashboard/bookingHistory">Booking History</Link></li>
                        <li><Link to="/dashboard/handleUser">User</Link></li>
                        <li><Link to="/dashboard/handleClientFeedBack">Client FeedBack</Link></li>


                        {/* Organizer admin */}
                        {/* <li><Link to="/dashboard/organizerAdminBookingHistory">Booking History</Link></li>
                        <li><Link to="/dashboard/organizerAdminPackage">Package</Link></li>
                        <li><Link to="/dashboard/organizerAdminClientFeedback">Client FeedBack</Link></li> */}

                        {/* user Dashboard */}
                        {/* <li><Link to="/dashboard/userBookingHistory">Booking History</Link></li>
                        <li><Link to="/dashboard/createCustomPackage">Create Custom Package</Link></li> */}

                        {/* all */}
                        <li><Link to="/dashboard/createPackage">Add Package</Link></li> 
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;