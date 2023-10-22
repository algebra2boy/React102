import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import HomeButton from "./HomeButton";

const Layout = () => {
    return (
        <div>
            <HomeButton />
            <SideBar />

            {/* bascially this is the APP and brew info element */}
            {/* render the child compoent */}
            <Outlet />
        </div>
    );
};

export default Layout;