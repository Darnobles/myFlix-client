import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const UpdateUser = ({
  user,
  handleSubmit,
  handleUpdate,
  token,
  data,
}) => {
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
    <Form className="profile-form" onSubmit={() => handleSubmit(e)}>
      <h1>Update Info</h1>
      <Form.Label>Username:</Form.Label>
      <Form.Control
        type="text"
        name="Username"
        value={user.username}
        onChange={(e) => handleUpdate(e)}
        required
        minLength="3"
      />
      <br></br>
      <Form.Label>Password:</Form.Label>
      <Form.Control
        type="password"
        name="Password"
        value={user.password}
        onChange={(e) => handleUpdate(e)}
      />
      <br></br>
      <Form.Label>Email address:</Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={user.email}
        onChange={(e) => handleUpdate(e)}
        required
      />
      <br></br>
      <Button
        variant="primary"
        onClick={onUpdate}
        user={user}
        data={data}
        token={token}
      >
        Update
      </Button>
    </Form>
  );
};
