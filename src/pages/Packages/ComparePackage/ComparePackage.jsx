import React from 'react';

const ComparePackage = () => {
    return (
            <div className="mx-28 pt-16"> 
                <div className="grid grid-cols-2 gap-2 justify-center item-center">
                    <div className="card w-10/12 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Package 1!</h2>
                            <h3>Price: $100</h3>
                            <h3>Time: 5 hours</h3>
                            <h3>Attendant: Maximum 10 people</h3>
                        </div>
                    </div>
                    <div className="card w-10/12 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Package 2!</h2>
                            <h3>Price: $300</h3>
                            <h3>Time: 7 hours</h3>
                            <h3>Attendant: Maximum 25 people</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white mt-10 p-10">
                    <h1 className="text-center text-4xl font-semibold mb-8">Compare Packages</h1>
                    <div className="flex justify-center item-center gap-10">
                        <div>
                            <h2 className="card-title">Package 1!</h2>
                            <h3>Price: $100</h3>
                            <h3>Time: 5 hours</h3>
                            <h3>Attendant: Maximum 10 people</h3>
                        </div>
                        <div>
                            <h2 className="card-title">Package 1!</h2>
                            <h3>Price: $100</h3>
                            <h3>Time: 5 hours</h3>
                            <h3>Attendant: Maximum 10 people</h3>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ComparePackage;