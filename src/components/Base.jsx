import { Outlet } from "react-router-dom";
import Footer from "./Footer";
export default function Base() {
    return (
        <>
            {/* <Navbar /> */}
            <Outlet />
            { <Footer /> }
        </>
    );
}