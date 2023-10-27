import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
    return (
        <div>
            <SideBar />

            {/* bascially this is the APP and brew info element */}
            {/* render the child compoent */}
            <Outlet />
        </div>
    );
};

export default Layout;