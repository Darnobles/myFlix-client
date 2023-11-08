import React from "react";
import Button from "react-bootstrap/Button";

export const UpdateUser = ({ user, handleSubmit, handleUpdate, token }) => {
  const onUpdate = (user) => {
    if (!token) return;

    fetch(
      `https://comic-flick-833dd2e0dd28.herokuapp.com/users/${user.Username}`,
      {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form className="profile-form" onSubmit={() => handleSubmit(e)}>
      <h1>Update Info</h1>
      <label>Username:</label>
      <input
        type="text"
        name="Username"
        value={user.Username}
        onChange={(e) => handleUpdate(e)}
      />
      <br></br>
      <label>Password:</label>
      <input
        type="password"
        name="Password"
        value={user.Password}
        onChange={(e) => handleUpdate(e)}
      />
      <br></br>
      <label>Email address:</label>
      <input
        type="email"
        name="Email"
        value={user.Email}
        onChange={(e) => handleUpdate(e.target.value)}
      />
      <br></br>
      <Button variant="primary" onClick={() => onUpdate(user)}>
        Update
      </Button>
    </form>
  );
};
