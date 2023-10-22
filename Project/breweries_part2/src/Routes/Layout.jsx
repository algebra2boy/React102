import { Outlet, Link } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li className="home-link" key="home-button">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* bascially this is the APP and brew info element */}
            {/* render the child compoent */}
            <SideBar />
            <Outlet />
        </div>
    );
};

export default Layout;