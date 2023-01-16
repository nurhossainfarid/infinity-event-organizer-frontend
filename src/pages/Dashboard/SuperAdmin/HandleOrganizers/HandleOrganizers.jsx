import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// custom css
import './HandleOrganizers.css';

const HandleOrganizers = () => {
    const [organizersData, setOrganizersData] = useState([]);
    useEffect(() => {
        const url = 'https://infinity-event-organizer-backend.vercel.app/v1/organization';
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setOrganizersData(data.data);
            })
    }, [organizersData]);

    // navigate organizer
    const navigate = useNavigate();
    const navigateOrganizer = (orgId) => {
        navigate(`/updateOrganizer/${orgId}`);
    }

    // delete organization
    const handleDelete = (id) => {
        const url = `https://infinity-event-organizer-backend.vercel.app/v1/organization/${id}`;
        fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // if (data.deletedCount) {
            //     toast.success(`Product ${name} is deleted successfully`);
            //     refetch();
            //     setDeletingProduct(null);
            // } else {
            //     toast.error(`Failed delete`)
            // }
          });
      };
    return (
        <div className="mt-10">
            <div className="flex justify-between">
                <h1 className="text-3xl text-center mb-10 dashboard-header">Handle Organizers</h1>
                <Link to="/dashboard/createOrganization" className="btn btn-outline btn-secondary animate-bounce text-lg ">Add Organizers</Link>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {
                    organizersData.map((org) => (
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Name: {org?.name}
                                </h2>
                                <p>Email: {org.email}</p>
                                <p>Phone: {org.contactNumber}</p>
                                <p>Address: {org.address}</p>
                                <p className=''>Status: {org.status}</p>
                                <div className="card-actions mt-5">
                                    <button className="btn btn-sm hover:btn-secondary">
                                        Details
                                    </button> 
                                    <button className="btn btn-sm hover:btn-secondary" onClick={() => 
                                    navigateOrganizer(org._id)}>
                                        Update
                                    </button> 
                                    <button className="btn btn-sm hover:btn-secondary" onClick={() => 
                                    handleDelete(org._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HandleOrganizers;