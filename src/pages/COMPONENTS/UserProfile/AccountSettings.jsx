import React, { useState, useEffect } from 'react';
import './AccountSettings.css';
import { Toaster, toast } from 'sonner';
import { Spinner } from 'react-bootstrap';

const AccountSettings = () => {
  const [isLoadingUserData, setIsLoadingUserData] = useState(true);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [userData, setUserData] = useState({});
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    setUserData(JSON.parse(user));
    setIsLoadingUserData(false);
  }, []);

  const logoutBtnHandler = () => {
    sessionStorage.clear();
    // navigate("/");
    toast.success('Berhasil Logout');
  };

  const editBtnHandler = () => {
    setIsEditable(!isEditable);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoadingUpdate(true);

    // Simpan perubahan ke server
    // Misalnya, Anda bisa menggunakan fetch atau axios untuk mengirim data ke server
    // Gantilah URL dan method sesuai dengan API Anda
    fetch('http://example.com/api/update-profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success('Berhasil Update Data Profil Anda');
        setIsLoadingUpdate(false);
        setIsEditable(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Gagal melakukan update profil');
        setIsLoadingUpdate(false);
      });
  };

  return (
    <div className="profile-container">
      {isLoadingUserData ? (
        <Spinner
          size="lg"
          className="d-flex justify-content-center"
          animation="border"
          variant="success"
        />
      ) : (
        <>
          <div className="profile-img">
            {/* <img
              src={
                userData?.profile_img === "data:image/;base64,"
                  ? profileImg
                  : userData?.profile_img
              }
              className="profile_image"
              alt=""
              width={"300px"}
            /> */}

            <div className="d-flex justify-content-center mt-2">
              <button
                type="button"
                className="btn btn-primary"
                // onClick={handleShow}
              >
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
                      value={userData?.firstname}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          firstname: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={!isEditable}
                      value={userData?.lastname}
                      name="lastname"
                      placeholder="Lastname"
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          lastname: e.target.value,
                        }))
                      }
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
                  value={userData?.email}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  disabled={!isEditable}
                  name="username"
                  placeholder="Username"
                  value={userData?.username}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={editBtnHandler}
                  >
                    {isEditable ? 'Batal' : 'Edit'}
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={!isEditable}
                  >
                    {isLoadingUpdate ? (
                      <Spinner
                        animation="border"
                        variant="light"
                        size="sm"
                      />
                    ) : (
                      'Simpan'
                    )}
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={logoutBtnHandler}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AccountSettings;
