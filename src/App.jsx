import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MobileNav from "./components/Navbar/MobileNav";
import { useState } from "react";

function App() {
    const [nav, setNav] = useState(false);
    return (
        <>
            <Banner />
            <div className='container'>
                <Navbar setNav={setNav} />
                <MobileNav nav={nav} setNav={setNav} />
                {/* <Shop /> */}
                <ProductDetails />
            </div>
            {/* <Home /> */}
            {/* <Login /> */}
            <Footer />
        </>
    );
}

export default App;
