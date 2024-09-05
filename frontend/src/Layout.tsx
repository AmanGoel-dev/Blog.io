import { Outlet } from "react-router-dom";
import Appbar from "./Components/Appbar";

const Layout = () => {
  return (
    <>
      <Appbar authorname="Aman" />
      <Outlet />
    </>
  );
};

export default Layout;
