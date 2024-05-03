import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Home2 from './pages/Home2';

import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function Router() {
    return (
        <Routes>
            <Route path="/" exact element={<Home2 />} />
            <Route path="/homeOld" exact element={<Home />} />

            <Route path="/aboutus" exact element={<AboutUs />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/contact" exact element={<Contact />} />
        </Routes>
    );
}