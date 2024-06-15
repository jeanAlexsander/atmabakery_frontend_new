import React, { useState, useEffect, useRef } from "react";
import { Spinner } from "react-bootstrap";
import { URL } from "../../../../constants";

const AccountSettings = () => {
  const [isLoadingUserData, setIsLoadingUserData] = useState(true);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const emailRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const [point, setPoint] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const firstname = localStorage.getItem("first_name");
  const lastname = localStorage.getItem("last_name");
  const email = localStorage.getItem("email");
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.value = firstname;
    }
    if (lastNameRef.current) {
      lastNameRef.current.value = lastname;
    }
    if (emailRef.current) {
      emailRef.current.value = email;
    }
  }, []);

  useEffect(() => {
    const fetchDaata = async () => {
      try {
        const response = await fetch(URL + "get-user-detail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: localStorage.getItem("user_id") }),
        });
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.log(error);
      }
    };
    const runData = async () => {
      try {
        const result = await fetchDaata();
        setPoint(result.total_point);
        setSaldo(result.saldo);
      } catch (error) {
        console.log(error);
      }
    };
    runData();
  });

  const editBtnHandler = () => {
    setIsEditable(!isEditable);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoadingUpdate(true);

    const updatedUserData = {
      email: emailRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
    };

    console.log(URL + "update-users/" + user_id);
    fetch(URL + "update-users/" + user_id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal melakukan update profil");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoadingUpdate(false);
        setIsEditable(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoadingUpdate(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
  };

  return (
    <div className="profile-container">
      <>
        <div className="profile-img">
          <div className="d-flex justify-content-center mt-2">
            <button type="button" className="btn btn-primary">
              Edit Foto Profil
            </button>
          </div>
        </div>
        <div>
          <h2>Profil Anda</h2>

          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex gap-2">
                <div className="col-6">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled={!isEditable}
                    name="firstname"
                    placeholder="Firstname"
                    ref={firstNameRef}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled={!isEditable}
                    name="lastname"
                    placeholder="Lastname"
                    ref={lastNameRef}
                  />
                </div>
              </div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                size={80}
                className="form-control"
                name="email"
                disabled
                placeholder="Email"
                ref={emailRef}
              />
              <div className="d-flex gap-2">
                <div className="col-6">
                  <label htmlFor="firstname">Total Point</label>
                  <input
                    type="number"
                    className="form-control"
                    disabled
                    name="firstname"
                    placeholder={point}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="lastname">Total Saldo</label>
                  <input
                    type="number"
                    className="form-control"
                    disabled
                    name="lastname"
                    placeholder={saldo}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={editBtnHandler}
                >
                  {isEditable ? "Batal" : "Edit"}
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!isEditable}
                >
                  {isLoadingUpdate ? (
                    <Spinner animation="border" variant="light" size="sm" />
                  ) : (
                    "Simpan"
                  )}
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default AccountSettings;
