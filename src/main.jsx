import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import SignIn from "./pages/Login/SignIn.jsx";
import SignUp from "./pages/Login/SignUp.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Cart/Checkout.jsx";
import Complete from "./pages/Cart/Complete.jsx";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import CartSummary from "./pages/Cart/CartSummary.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import CartContextProvider from "./context/CartContext";
import Details from "./pages/Profile/Details.jsx";
import Address from "./pages/Profile/Address.jsx";
import OrdersHistory from "./pages/Profile/OrdersHistory.jsx";
import Whishlist from "./pages/Profile/Whishlist.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import AuthContextProvider from "./context/AuthContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "shop/:category?",
                element: <Shop />,
            },
            {
                path: "product/:id",
                element: <ProductDetails />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "cart",
                element: <Cart />,
                children: [
                    {
                        path: "",
                        element: <CartSummary />,
                    },
                    {
                        path: "checkout",
                        element: <Checkout />,
                    },
                    {
                        path: "complete",
                        element: <Complete />,
                    },
                ],
            },
            {
                path: "profile",
                element: <Profile />,
                children: [
                    {
                        path: "",
                        element: <Details />,
                    },
                    {
                        path: "address",
                        element: <Address />,
                    },
                    {
                        path: "orders",
                        element: <OrdersHistory />,
                    },
                    {
                        path: "wishlist",
                        element: <Whishlist />,
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
        children: [
            {
                path: "",
                element: <SignIn />,
            },
            {
                path: "register",
                element: <SignUp />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthContextProvider>
            <CartContextProvider>
                <RouterProvider router={router} />
            </CartContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
