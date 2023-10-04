import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export const DeregisterUser = ({ username }) => {
  const [deregister, setDeregister] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
    };

    fetch("https://comic-flick-833dd2e0dd28.herokuapp.com//users/:Username", {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("User deregistered");
        window.location.reload();
      } else {
        alert("Unable to deregister");
      }
    });
  };

  handleDeregister = () => setDeregister(true);
  handleCloseDeregister = () => setDeregister(false);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername" />
      <Form.Label>Username:</Form.Label>
      <Form.Control
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        minLength="3"
      />
      <Button type="button" onClick={() => deregister("userName")}>
        Deregister
      </Button>
      <input type="submit" />
    </Form>
  );
};
