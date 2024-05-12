import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AdminSideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <FontAwesomeIcon icon={faUsers} className="icon-margin me-3" />
                Promo Point
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/admin/Product"
              activeClassName="activeClicked"
              onClick={() => {
                navigate("/admin/Product");
              }}
            >
              <CDBSidebarMenuItem icon="table">Product Data</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/admin/Recipe" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Recipe Data</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/admin/Ingeredients"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Ingredients
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/admin/customer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Customer
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/admin/Hampers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Hampers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/admin/changepassword"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Change Password
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
          <div>
            <Button variant="danger" className="mb-3" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default AdminSideBar;
