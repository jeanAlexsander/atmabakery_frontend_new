import React from "react";
import { URL } from "../../../../constants";

const ChangePasswordAdmin = () => {
  const handleSendEmail = () => {
    async function send() {
      const response = await fetch(`${URL}change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: localStorage.getItem("email") }),
      });
    }

    async function sending() {
      try {
        await send();
      } catch (err) {
        console.log(err);
      }
    }
    sending();
  };

  return <button onClick={handleSendEmail}>send email</button>;
};

export default ChangePasswordAdmin;
