import React from 'react';

// custom images 
import img1 from '../../../images/feedback3.jpg';

const HomeContact = () => {
    return (
        <div>
            <section className="contact-home-bg">
                <div className="mx-28 text-center">
                    <p>We Take Care Of Preparation,</p>
                    <h1 className="contact-header text-5xl ">You Enjoy The Celebration!</h1>
                    <button className="btn btn-outline btn-secondary">Button</button>
                </div>
            </section>
            <section className="grid grid-cols-3">
                <img src={img1} alt="" />
                <div className="col-span-2">
                    <h1>Get The Party Start</h1>
                    <p>As the premier event planning company in the area. Each event and client is unique and we believe our services should be as well.</p>
                    <div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeContact;