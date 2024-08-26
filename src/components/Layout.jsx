import { Outlet } from "react-router-dom";
import NavBAr from "./NavBar/NavBAr";

const Layout = () => {
  return (
    <div>
      <NavBAr />
      <Outlet />
    </div>
  );
};
export default Layout;
