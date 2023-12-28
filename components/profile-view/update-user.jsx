import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export const UpdateUser = ({ user, token }) => {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState(user.Password);
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);

  const onUpdate = (event) => {
    event.preventDefault();

    const newUser = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch(
      `https://comic-flick-833dd2e0dd28.herokuapp.com/users/${user.Username}`,
      {
        method: "PUT",
        body: JSON.stringify(newUser),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        alert("Update completed");
        window.location.reload();
      } else {
        alert("Update failed");
      }
    });
  };

  return (
    <Form className="profile-form" onSubmit={onUpdate}>
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
      <Form.Label>Birthday:</Form.Label>
      <Form.Control
        type="date"
        name="birthday"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        required
      />
      <br></br>
      <Button variant="primary" onClick={onUpdate}>
        Update
      </Button>
    </Form>
  );
};
