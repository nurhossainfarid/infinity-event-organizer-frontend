import React from 'react';

// custom css
import './HandleOrganizers.css';

const HandleOrganizers = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-between">
                <h1 className="text-3xl text-center mb-10 dashboard-header">Handle Organizers</h1>
                <button className="btn btn-outline btn-secondary animate-bounce text-lg ">Add Organizer</button>
            </div>
            <div className="grid grid-cols-3 gap-10">
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Organizer Name
                        </h2>
                        <p>Organizer Details</p>
                        <p>Organizer Address</p>
                        <p>Organizer Contact Info</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Update</div> 
                        <div className="badge badge-outline">Delete</div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Organizer Name
                        </h2>
                        <p>Organizer Details</p>
                        <p>Organizer Address</p>
                        <p>Organizer Contact Info</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Update</div> 
                        <div className="badge badge-outline">Delete</div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Organizer Name
                        </h2>
                        <p>Organizer Details</p>
                        <p>Organizer Address</p>
                        <p>Organizer Contact Info</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Update</div> 
                        <div className="badge badge-outline">Delete</div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Organizer Name
                        </h2>
                        <p>Organizer Details</p>
                        <p>Organizer Address</p>
                        <p>Organizer Contact Info</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Update</div> 
                        <div className="badge badge-outline">Delete</div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Organizer Name
                        </h2>
                        <p>Organizer Details</p>
                        <p>Organizer Address</p>
                        <p>Organizer Contact Info</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Update</div> 
                        <div className="badge badge-outline">Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HandleOrganizers;