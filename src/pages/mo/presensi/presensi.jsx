import MOSideBar from "../component/side_nav_bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import ModalUpdatePresensi from "./updatePresensiModals";
import { useDispatch, useSelector } from "react-redux";
import { showUpdatePresensiModal } from "../../../store/presensi";

const PresensiView = () => {
  const initValue = useSelector((state) => state.presensiStore.presensiData);
  const [presensi, setPresensi] = useState([...initValue]);
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
    setPresensi(temp);
  };

  const handleOpenModalUpdate = () => {
    dispatch(showUpdatePresensiModal());
  };
  return (
    <div style={{ display: "flex" }}>
      <MOSideBar />\
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
            handleOpenModal();
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
                </tr>
              </thead>
              <tbody>
                {presensi.map((p) => {
                  return (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>
                        {p.first_name} {p.last_name}
                      </td>
                      <td>
                        <div class="input-group mb-3">
                          <select
                            classname="custom-select "
                            id="inputGroupSelect03"
                            style={{ width: "100px", height: "40px" }}
                          >
                            <option selected>Choose...</option>
                            <option value="1">Hadir</option>
                            <option value="2">Tidak Hadir</option>
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
