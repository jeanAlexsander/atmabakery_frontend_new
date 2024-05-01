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
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const MOSideBar = () => {
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
            Manager Operational
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <FontAwesomeIcon icon={faUsers} className="icon-margin me-3" />{" "}
                Employees
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Roles</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Custodians</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
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
            <Button variant="danger" className="mb-3">Logout</Button>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default MOSideBar;
