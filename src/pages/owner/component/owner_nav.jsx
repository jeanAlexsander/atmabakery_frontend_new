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

const OwnerSideBar = () => {
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
            Owner
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <FontAwesomeIcon icon={faUsers} className="icon-margin me-3" />{" "}
                Salary
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/owner/report" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/owner/report-gaji"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Report Absent
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/owner/report-penjualan-per-product"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Report Per Product
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/owner/report-ingredient"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Ingredient Report
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/owner/report-ingredient-per-periode"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Ingredient Report Per Periode
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/owner/pengeluaran-pemasukan"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Pengeluaran Pemasukan
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

export default OwnerSideBar;
