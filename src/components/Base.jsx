import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

export default function Base() {
    return (
        <>
            <Navbar/>
            <Outlet />
            {/* <Footer /> */}
        </>
    );
}