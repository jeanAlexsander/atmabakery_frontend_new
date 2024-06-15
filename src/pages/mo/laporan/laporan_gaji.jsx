import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeAttendanceSalary } from "../../../store/mo/report";
import "./table.css";
import { Button, Dropdown } from "react-bootstrap";
import MOSideBar from "../component/side_nav_bar";
import { useReactToPrint } from "react-to-print";

const EmployeeAttendanceAndSalaryReportsView = () => {
  const initValue = useSelector(
    (state) => state.reportStore.employeeAttendanceSalaryData
  );
  const dispatch = useDispatch();
  const [selectedMonth, setSelectedMonth] = useState("Januari");

  const monthMapping = {
    Januari: 1,
    Februari: 2,
    Maret: 3,
    April: 4,
    Mei: 5,
    Juni: 6,
    Juli: 7,
    Agustus: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Desember: 12,
  };

  useEffect(() => {
    dispatch(fetchEmployeeAttendanceSalary(monthMapping[selectedMonth]));
  }, [dispatch, selectedMonth]);

  const handleSelect = (eventKey) => {
    setSelectedMonth(eventKey);
  };

  const calculateTotalSalary = (data) => {
    return data.reduce(
      (acc, item) => acc + (item.salary * item.attend || 0),
      0
    );
  };

  const calculateTotalBonus = (data) => {
    return data.reduce(
      (acc, item) => acc + (parseInt(item.daily_bonus) || 0),
      0
    );
  };

  const totalSalary = calculateTotalSalary(initValue);
  const totalBonus = calculateTotalBonus(initValue);
  const totalOverall = totalSalary + totalBonus;
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

  return (
    <div style={{ display: "flex" }}>
      <MOSideBar />
      <div style={{ width: "100%", marginTop: "20px", marginLeft: "20px" }}>
        <Button
          variant="success"
          onClick={handlePrint}
          style={{ marginBottom: "20px" }}
        >
          Print Disini
        </Button>
        <div ref={componentRef}>
          <h1 className="text-center my-3 border py-2">Report Absent</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <table className="custom-table">
              <thead>
                <tr>
                  <td colSpan={7}>
                    <strong>Atma Kitchen</strong>
                    <p>Jl. Centralpark No.10 Yogyakarta</p>
                    <div>
                      <strong>LAPORAN Presensi Karyawan</strong>
                    </div>
                    <Dropdown onSelect={handleSelect}>
                      <Dropdown.Toggle variant="danger" id="dropdown-basic">
                        {selectedMonth}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {Object.keys(monthMapping).map((month) => (
                          <Dropdown.Item key={month} eventKey={month}>
                            {month}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <th>
                    <strong>Employee ID</strong>
                  </th>
                  <th>
                    <strong>Nama</strong>
                  </th>
                  <th>
                    <strong>Jumlah Hadir</strong>
                  </th>
                  <th>
                    <strong>Jumlah Bolos</strong>
                  </th>
                  <th>
                    <strong>Honor Harian</strong>
                  </th>
                  <th>
                    <strong>Bonus Rajin</strong>
                  </th>
                  <th>
                    <strong>Total</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                {initValue.map((item) => (
                  <tr key={item.employee_id}>
                    <td>{item.employee_id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.attend}</td>
                    <td>{item.absent}</td>
                    <td>
                      {(
                        parseInt(item.salary) * item.attend || 0
                      ).toLocaleString("id-ID")}
                    </td>
                    <td>
                      {(parseInt(item.daily_bonus) || 0).toLocaleString(
                        "id-ID"
                      )}
                    </td>
                    <td>
                      {(
                        (parseInt(item.salary) * item.attend || 0) +
                        (parseInt(item.daily_bonus) || 0)
                      ).toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} style={{ textAlign: "center" }}>
                    <strong>Total</strong>
                  </td>
                  <td>{totalSalary.toLocaleString("id-ID")}</td>
                  <td>{totalBonus.toLocaleString("id-ID")}</td>
                  <td>{totalOverall.toLocaleString("id-ID")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendanceAndSalaryReportsView;
