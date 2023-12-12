import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import MobileNav from "./components/Navbar/MobileNav";
import FlyoutCart from "./components/FlyoutCart/FlyoutCart";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Newsletter from "./pages/Home/Newsletter";

function App() {
    const [nav, setNav] = useState(false);
    const [cart, setCart] = useState(false);
    return (
        <>
            <Banner />
            <FlyoutCart cart={cart} setCart={setCart} />
            <MobileNav nav={nav} setNav={setNav} />
            <div className='container'>
                <Navbar setNav={setNav} setCart={setCart} />
                <Outlet />
            </div>
            <Newsletter />
            <Footer />
        </>
    );
}

export default App;
