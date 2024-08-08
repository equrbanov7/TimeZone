import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const sidebarData = [
  {
    id: 1,
    name: "Get Product",
  },
  {
    id: 2,
    name: "Add Product",
    path: "/admin/add-product",
  },
];

function Sidebar() {
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar">
            <div className="personInfo">
              <div className="personImg">
                <img
                  src="https://app.morooq.com/Content/AdminContent/image/user.svg"
                  alt="User"
                />
              </div>
              <div className="personName">
                <h5>DTX Team</h5>
              </div>
            </div>
            <ul className="sidebar__list">
              {sidebarData.map((item) => (
                <li
                  key={item.id}
                  className={`sidebar__item ${
                    activeItem === item.id ? "active" : ""
                  }`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <Link to={item.path}>
                    <p>{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
