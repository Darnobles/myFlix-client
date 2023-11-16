import { useState, useEffect } from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { UpdateUser } from "./update-user";
import { Container } from "react-bootstrap";
import { FavoriteMovies } from "./favorite-movies";
import { UserInfo } from "./user-info";
import { DeregisterUser } from "./deregister-user";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ProfileView = ({ user, movies, token, data }) => {
  const favoriteMovieList = movies.filter((m) =>
    user.FavoriteMovies.includes(m.id)
  );

  return (
    <Container>
      <UserInfo name={user.Username} email={user.Email} />
      <DeregisterUser username={user.Username} user={user} token={token} />
      <UpdateUser user={user} token={token} data={data} />
      <Row>
        <Col className="mb-4">
          <FavoriteMovies
            favoriteMovieList={favoriteMovieList}
            token={token}
            user={user}
          />
        </Col>
      </Row>
    </Container>
  );
};
