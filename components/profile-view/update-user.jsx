import React from "react";
import Button from "react-bootstrap/Button";

export const UpdateUser = ({ user, handleSubmit, handleUpdate }) => {
  console.log(user);
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
      <Button variant="primary" type="submit">
        Update
      </Button>
    </form>
  );
};
