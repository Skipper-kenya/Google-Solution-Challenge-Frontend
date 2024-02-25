import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import LandingPage from "./Pages/LandingPage";
import VendorFrom from "./Components/Forms/vendor_form";
import IssuerFrom from "./Components/Forms/issuer_form";
import Example from "./Components/Forms/Example";
import IssuerDashboard from "./Pages/IssuerDashboard";
import VendorDashboard from "./Pages/VendorDashboard";
import Profile from "./Pages/Profile";
import AboutUs from "./Components/LandingPage/AboutUs";
// import Livebidding from "./Components/LiveBidding/Livebidding";

import BiddingPage from "./Pages/BiddingPage";
import ServiceInfo from "./Components/Dashboard/ServiceInfo";

import WatchListPage from "./Pages/WatchListPage";
// import LiveBids from "./Components/LiveBidding/livebids";
// import LiveBids from "./Components/LiveBidding/livebids";

export default function App1() {
    return (
        <Router>
            <Routes>
                {/* landing page routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutUs />} />
                {/* <Route path="/live-bids" element={<LiveBids />} /> */}
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/log-in" element={<LogIn />} />
                <Route path="/vendor-form" element={<VendorFrom />} />
                <Route path="/issuer-form" element={<IssuerFrom />} />
                {/* issuer dashboard routes */}
              ]
                {/* <Route path="/service-info" element={<ServiceInfo />} />
        <Route path="/profile" element={<Profile />} /> */}
            </Routes>
        </Router>
    );
}
