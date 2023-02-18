/**
 * Title: Event management system 
 * Description: Try to cover all organizers in a platform 
 * Author: Nur Hossain Farid
 * Date: 12/11/2022
 */

import { Route, Routes } from 'react-router-dom';
import './App.css';

// import all components
import Header from './components/Header/Header';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Packages from './pages/Packages/Packages';
import Services from './pages/Services/Services';
import Login from './pages/share/Login/Login';
import Registration from './pages/share/Registration/Registration';
import HandleAllPackage from './pages/Dashboard/SuperAdmin/HandleAllPackage/HandleAllPackage.jsx';
import HandleOrganizers from './pages/Dashboard/SuperAdmin/HandleOrganizers/HandleOrganizers.jsx';
import BookingHistory from './pages/Dashboard/SuperAdmin/BookingHistory/BookingHistory.jsx';
import HandleUser from './pages/Dashboard/SuperAdmin/HandleUser/HandleUser.jsx';
import HandleClientFeedBack from './pages/Dashboard/SuperAdmin/HandleClientFeedback/HandleClientFeedback.jsx';
import OrganizerAdminBookingHistory from './pages/Dashboard/OrganizerAdmin/BookingHistory/OrganizerBookingHistory.jsx';
import OrganizerAdminClientFeedback from './pages/Dashboard/OrganizerAdmin/ClientFeedBack/OrganizerClientFeedback.jsx';
import OrganizerAdminPackage from './pages/Dashboard/OrganizerAdmin/Package/OrganizerPackage.jsx';
import CreatePackage from './pages/Dashboard/CreatePackage/CreatePackage';
import CreateCustomPackage from './pages/Dashboard/CreateCustomPackage/CreateCustomPackage';
import UserBookingHistory from './pages/Dashboard/User/UserBookingHistory/UserBookingHistory';
import WhoWeAre from './pages/About/WhoWeAre/WhoWeAre';
import Mission from './pages/About/Mission/Mission';
import Vision from './pages/About/Vision/Vision';
import HonorAward from './pages/About/HonorAward/HonorAward';
import Footer from './components/Footer/Footer';
import Anniversaries from './pages/Services/Anniversaries/Anniversaries';
import HolidayParties from './pages/Services/HolidayParties/HolidayParties';
import CorporateFunction from './pages/Services/CorporateFunction/CorporateFunction';
import ConferencePlanning from './pages/Services/ConferencePlanning/ConferencePlanning';
import FashionConcert from './pages/Services/FashionConcert/FashionConcert';
import StageDecoration from './pages/Services/StageDecoration/StageDecoration';
import Organizers from './pages/Organizers/Organizers';
import Wedding from './pages/Packages/Wedding/Wedding';
import BirthdayParties from './pages/Packages/BirthdayParties/BirthdayParties';
import CorporateParties from './pages/Packages/CorporateParties/CorporateParties';
import HolidayPartiesPackages from './pages/Packages/HolidayPartiesPackages/HolidayPartiesPackages';
import PrivateParties from './pages/Packages/PrivateParties/PrivateParties';
import Concerts from './pages/Packages/Concerts/Concerts';
import AnniversariesPackages from './pages/Packages/Anniversaries/AnniversariesPackages';
import ComparePackage from './pages/Packages/ComparePackage/ComparePackage';
import UpdatePackage from './pages/Dashboard/SuperAdmin/HandleAllPackage/UpdatePackage';
import CreateOrganizer from './pages/Dashboard/SuperAdmin/HandleOrganizers/CreateOrganizer';
import UpdateUser from './pages/Dashboard/SuperAdmin/HandleUser/UpdateUser';
import Profile from './pages/share/Profile/Profile';
import UpdateOrganizer from './pages/Dashboard/SuperAdmin/HandleOrganizers/UpdateOrganizer';
import RequireAuth from './pages/share/Require/RequireAuth';
import RequireSuperAdmin from './pages/share/Require/RequireSuperAdmin';
import RequireOrganizerAdmin from './pages/share/Require/RequireOrganizerAdmin';
import OrganizerDetails from './pages/Organizers/OrganizerDetails';
import BookingPackage from './pages/BookingPackage/BookingPackage';


function App() {
  return (
    <div className="relative h-screen">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/organizers" element={<Organizers></Organizers>}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/organizerDetails/:oId" element={<OrganizerDetails></OrganizerDetails>}></Route>
        <Route path="/updatePackage/:packageId" element={<UpdatePackage></UpdatePackage>}></Route>
        <Route path="/updateOrganizer/:orgId" element={<UpdateOrganizer></UpdateOrganizer>}></Route>
        <Route path="/updateUser/:userId" element={<UpdateUser></UpdateUser>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/bookingPackage" element={<BookingPackage></BookingPackage>}></Route>

        {/* --------------------------------- All nested routes -------------------------------------- */}
        {/* all about routes */}
        <Route path="/about" element={<About></About>}>
          <Route index element={<WhoWeAre></WhoWeAre>}></Route>
          <Route path="mission" element={<Mission></Mission>}></Route>
          <Route path="vision" element={<Vision></Vision>}></Route>
          <Route path="honorAward" element={<HonorAward></HonorAward>}></Route>
        </Route>
        {/* all service routes */}
        <Route path="/services" element={<Services></Services>}>
          <Route index element={<Anniversaries></Anniversaries>}></Route>
          <Route path="holidayParties" element={<HolidayParties></HolidayParties>}></Route>
          <Route path="corporateFunction" element={<CorporateFunction></CorporateFunction>}></Route>
          <Route path="fashionConcert" element={<FashionConcert></FashionConcert>}></Route>
          <Route path="conferencePlanning" element={<ConferencePlanning></ConferencePlanning>}></Route>
          <Route path="stageDecoration" element={<StageDecoration></StageDecoration>}></Route>
        </Route>
        {/* all packages routes */}
        <Route path="/packages" element={
          <RequireAuth>
            <Packages></Packages>
          </RequireAuth>
        }>
          <Route index element={<Wedding></Wedding>}></Route>
          <Route path="birthdayParties" element={<BirthdayParties></BirthdayParties>}></Route>
          <Route path="corporateFunction" element={<CorporateParties></CorporateParties>}></Route>
          <Route path="holidayPartiesPackages" element={<HolidayPartiesPackages></HolidayPartiesPackages>}>   
          </Route>
          <Route path="privateParties" element={<PrivateParties></PrivateParties>}></Route>
          <Route path="concerts" element={<Concerts></Concerts>}></Route>
          <Route path="anniversariesPackages" element={<AnniversariesPackages></AnniversariesPackages>}></Route>
          <Route path="comparePackage" element={<ComparePackage></ComparePackage>}></Route>
        </Route>
        {/* all dashboard routes */}
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          {/* RequireSuperAdmin */}
          <Route path="allPackage" element={
            <RequireSuperAdmin>
              <HandleAllPackage></HandleAllPackage>
            </RequireSuperAdmin>
          }></Route>
          <Route path="bookingHistory" element={
            <RequireSuperAdmin>
              <BookingHistory></BookingHistory>
            </RequireSuperAdmin>
          }></Route>
          <Route path="handleOrganizer" element={
            <RequireSuperAdmin>
              <HandleOrganizers></HandleOrganizers>
            </RequireSuperAdmin>
          }></Route>
          <Route path="handleUser" element={
            <RequireSuperAdmin>
              <HandleUser></HandleUser>
            </RequireSuperAdmin>
          }></Route>
          <Route path="handleClientFeedBack" element={
            <RequireSuperAdmin>
              <HandleClientFeedBack></HandleClientFeedBack>
            </RequireSuperAdmin>
          }></Route>
          <Route path="createPackage" element={
            <RequireSuperAdmin>
              <CreatePackage></CreatePackage>
            </RequireSuperAdmin>
          }></Route>
          <Route path="createOrganization" element={
            <RequireSuperAdmin>
              <CreateOrganizer></CreateOrganizer>
            </RequireSuperAdmin>
          }></Route>
          
          {/* RequireOrganizerAdmin */}
          <Route path="organizerAdminBookingHistory" element={
            <RequireOrganizerAdmin>
              <OrganizerAdminBookingHistory> 
              </OrganizerAdminBookingHistory>
            </RequireOrganizerAdmin>
          }></Route>
          <Route path="organizerAdminClientFeedback" element={
            <RequireOrganizerAdmin>
              <OrganizerAdminClientFeedback> 
              </OrganizerAdminClientFeedback>
            </RequireOrganizerAdmin>
          }></Route>
          <Route path="organizerAdminPackage" element={
            <RequireOrganizerAdmin>
              <OrganizerAdminPackage></OrganizerAdminPackage>
            </RequireOrganizerAdmin>
          }></Route>

          {/* require for all */}
          <Route path="userBookingHistory" element={<UserBookingHistory></UserBookingHistory>}></Route>
          <Route path="createCustomPackage" element={<CreateCustomPackage></CreateCustomPackage>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
