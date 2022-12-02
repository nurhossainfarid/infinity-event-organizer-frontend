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

function App() {
  return (
    <div className="relative h-screen">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}>
          <Route index element={<WhoWeAre></WhoWeAre>}></Route>
          <Route path="mission" element={<Mission></Mission>}></Route>
          <Route path="vision" element={<Vision></Vision>}></Route>
          <Route path="honorAward" element={<HonorAward></HonorAward>}></Route>
        </Route>
        <Route path="/services" element={<Services></Services>}>
          <Route index element={<Anniversaries></Anniversaries>}></Route>
          <Route path="holidayParties" element={<HolidayParties></HolidayParties>}></Route>
          <Route path="corporateFunction" element={<CorporateFunction></CorporateFunction>}></Route>
          <Route path="fashionConcert" element={<FashionConcert></FashionConcert>}></Route>
          <Route path="conferencePlanning" element={<ConferencePlanning></ConferencePlanning>}></Route>
          <Route path="stageDecoration" element={<StageDecoration></StageDecoration>}></Route>
        </Route>
        <Route path="/packages" element={<Packages></Packages>}>
        <Route index element={<Wedding></Wedding>}></Route>
          <Route path="birthdayParties" element={<BirthdayParties></BirthdayParties>}></Route>
          <Route path="corporateFunction" element={<CorporateParties></CorporateParties>}></Route>
          <Route path="holidayPartiesPackages" element={<HolidayPartiesPackages></HolidayPartiesPackages>}></Route>
          <Route path="privateParties" element={<PrivateParties></PrivateParties>}></Route>
          <Route path="concerts" element={<Concerts></Concerts>}></Route>
          <Route path="anniversariesPackages" element={<AnniversariesPackages></AnniversariesPackages>}></Route>
          <Route path="comparePackage" element={<ComparePackage></ComparePackage>}></Route>
        </Route>
        <Route path="/organizers" element={<Organizers></Organizers>}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<HandleAllPackage></HandleAllPackage>}></Route>
          <Route path="bookingHistory" element={<BookingHistory></BookingHistory>}></Route>
          <Route path="handleOrganizer" element={<HandleOrganizers></HandleOrganizers>}></Route>
          <Route path="handleUser" element={<HandleUser></HandleUser>}></Route>
          <Route path="handleClientFeedBack" element={<HandleClientFeedBack></HandleClientFeedBack>}></Route>
          <Route path="organizerAdminBookingHistory" element={<OrganizerAdminBookingHistory></OrganizerAdminBookingHistory>}></Route>
          <Route path="organizerAdminClientFeedback" element={<OrganizerAdminClientFeedback></OrganizerAdminClientFeedback>}></Route>
          <Route path="organizerAdminPackage" element={<OrganizerAdminPackage></OrganizerAdminPackage>}></Route>
          <Route path="createPackage" element={<CreatePackage></CreatePackage>}></Route>
          <Route path="createCustomPackage" element={<CreateCustomPackage></CreateCustomPackage>}></Route>
          <Route path="userBookingHistory" element={<UserBookingHistory></UserBookingHistory>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
