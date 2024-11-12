import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="overflow-x-hidden dark:bg-backgroundDark">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
