import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

export default function Base() {
    return (
        <>
            <Navbar />
            <div className="my-44">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}