import MOSideBar from "../component/side_nav_bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import ModalUpdatePresensi from "./updatePresensiModals";
import { useDispatch, useSelector } from "react-redux";
import { fetchPesensi, showUpdatePresensiModal } from "../../../store/presensi";

const PresensiView = () => {
  const initValue = useSelector((state) => state.presensiStore.presensiData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPresensi, setFilteredPresensi] = useState([]);
  const [updatedData, setUpdatedData] = useState([]); // State untuk menyimpan data yang telah diubah
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const filterPresensi = (cek) => {
    var lowerCek = cek.toLowerCase();
    var temp = initValue.filter(
      (p) =>
        p.first_name.toLowerCase().includes(lowerCek) ||
        p.last_name.toLowerCase().includes(lowerCek) ||
        p.attendance.toLowerCase().includes(lowerCek)
    );
    setSearchTerm(temp);
  };

  const handleOpenModalUpdate = () => {
    dispatch(showUpdatePresensiModal());
  };

  const handleChangeAttendance = (employeeId, newValue) => {
    console.log(updatedData);
    const updatedIndex = updatedData.findIndex(
      (data) => data.employee_id === employeeId
    );

    if (updatedIndex !== -1) {
      updatedData[updatedIndex].attendance_time = newValue;
    } else {
      const newData = { employee_id: employeeId, attendance_time: newValue };
      setUpdatedData([...updatedData, newData]);
    }
  };

  const belumAbsen = <td>Not Present Yet</td>;
  const sudahAbsen = <td>Present</td>;
  const tidakHadir = <td>Not Present</td>;

  useEffect(() => {
    dispatch(fetchPesensi());
  }, [dispatch]);

  return (
    <div style={{ display: "flex" }}>
      <MOSideBar />
      <ModalUpdatePresensi />
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginLeft: "20px",
            marginTop: "20px",
            flex: "1",
          }}
        >
          <h4>Employee</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <input
              type="text"
              className="form-control form-control-sm "
              placeholder="Search..."
              style={{ width: "300px", marginRight: "10px" }}
              ref={searchRef}
              onChange={(e) => {
                setFilteredPresensi(String(e.target.value));
              }}
            />
            <Button
              variant="danger"
              className="mb-2"
              onClick={() => {
                filterPresensi(String(searchRef.current.value));
              }}
            >
              Search
            </Button>
          </div>
        </div>
        <Button
          onClick={() => {
            handleOpenModalUpdate();
          }}
          variant="success"
          className="mt-3 "
          style={{ marginLeft: "20px" }}
        >
          Save All
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Data Attendance
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Employee_id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Attendance</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(searchTerm ? filteredPresensi : initValue).map((p) => {
                  return (
                    <tr key={p.employee_id}>
                      <td>{p.employee_id}</td>
                      <td>
                        {p.first_name} {p.last_name}
                      </td>
                      {p.attendance_time === undefined && belumAbsen}
                      {p.attendance_time === "null" && tidakHadir}
                      {p.attendance_time !== undefined && sudahAbsen}

                      <td>
                        <div class="input-group mb-3">
                          <select
                            className="custom-select "
                            id="inputGroupSelect03"
                            style={{ width: "100px", height: "40px" }}
                            onChange={(e) => {
                              handleChangeAttendance(
                                p.employee_id,
                                e.target.value
                              );
                            }}
                            value={p.attendance}
                          >
                            <option value="Hadir">Choose...</option>
                            <option value="Hadir">Hadir</option>
                            <option value="Tidak Hadir">Tidak Hadir</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresensiView;
