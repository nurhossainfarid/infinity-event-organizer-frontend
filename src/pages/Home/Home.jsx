import React from 'react';
import Banner from './Banner/Banner';
import Events from './Events/Events';
import GalleryHome from './GalleryHome/GalleryHome';
import HomeBlogs from './HomeBlogs/HomeBlogs';
import HomeClient from './HomeClient/HomeClient';
import HomePackage from './HomePackage/HomePackage';
import HomeSponsors from './HomeSponsors/HomeSponsors';
import OrganizationHomePage from './OrganizationHomePage/OrganizationHomePage';
import ServicePackage from './ServicePackage/ServicePackage';
import UpcomingEvent from './UpcomingEvent/UpcomingEventHome';
import Welcome from './Welcome/Welcome.jsx';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Events></Events>
            <ServicePackage></ServicePackage>
            <OrganizationHomePage></OrganizationHomePage>
            <HomePackage></HomePackage>
            <GalleryHome></GalleryHome>
            <UpcomingEvent></UpcomingEvent>
            <HomeBlogs></HomeBlogs>
            <HomeClient></HomeClient>
            <HomeSponsors></HomeSponsors>
        </div>
    );
};

export default Home;