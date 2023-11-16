import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export const UpdateUser = ({ user, token, data }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onUpdate = (event) => {
    event.preventDefault();
    if (!token) return;

    fetch(
      `https://comic-flick-833dd2e0dd28.herokuapp.com/users/${user.Username}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { Authorization: `Bearer ${token}` },
        "Content-Type": "application/json",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Form className="profile-form" onSubmit={() => onUpdate(e)}>
      <h1>Update Info</h1>
      <Form.Label>Username:</Form.Label>
      <Form.Control
        type="text"
        name="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        minLength="3"
      />
      <br></br>
      <Form.Label>Password:</Form.Label>
      <Form.Control
        type="password"
        name="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <Form.Label>Email address:</Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br></br>
      <Button variant="primary" onClick={onUpdate}>
        Update
      </Button>
    </Form>
  );
};
