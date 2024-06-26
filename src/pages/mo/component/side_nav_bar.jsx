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

const MOSideBar = () => {
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
            href="/mo/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Manager Operational
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/mo" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Position</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/mo/employee" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <FontAwesomeIcon icon={faUsers} className="icon-margin me-3" />{" "}
                Employees
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/mo/Custodians" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Custodians
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/mo/Purchase" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Purchase</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/mo/otherNeed" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Other Need
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/mo/confirmOrder"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Confirm Order
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/mo/pesanan-hari-ini"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Product Hari Ini
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/mo/report" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/mo/report-penjualan-per-product"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Report Per Product
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/mo/report-ingredient"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Ingredient Report
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/mo/report-ingredient-per-periode"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Ingredient Report Per Periode
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/mo/report-gaji" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Report Absent Employee
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/mo/pengeluaran-pemasukan"
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

export default MOSideBar;
