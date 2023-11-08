import React from "react";

export const UserInfo = ({ email, name }) => {
  return (
    <>
      <p style={{ fontSize: 40 }}>Welcome {name}</p>
      <p>Email {email}</p>
    </>
  );
};
