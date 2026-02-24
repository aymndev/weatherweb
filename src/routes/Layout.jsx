// Layout.jsx
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

export default function Layout() {
  return (
    <div className="flex">
      <h1></h1>
      <Menu />
      <Outlet />
    </div>
  );
}