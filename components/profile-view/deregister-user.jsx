import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export const DeregisterUser = ({ username, user, token }) => {
  const [deregister, setDeregister] = useState(false);
  console.log(token);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://comic-flick-833dd2e0dd28.herokuapp.com/users/${user.Username}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        alert("User deregistered");
        window.location.reload();
      } else {
        alert("Unable to deregister");
      }
    });
  };

  const handleDeregister = () => setDeregister(true);
  const handleCloseDeregister = () => setDeregister(false);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername" />
      <Form.Label>Username:</Form.Label>
      <Form.Control
        type="text"
        value={username}
        onChange={(e) => username(e.target.value)}
        required
        minLength="3"
      />

      <Button onClick={handleSubmit}>Deregister</Button>
      {/* <input type="submit" /> */}
    </Form>
  );
};
