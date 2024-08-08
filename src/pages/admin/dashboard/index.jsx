import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Dashboard/Sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <section className="dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;
