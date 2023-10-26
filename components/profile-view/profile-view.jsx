import { useState, useEffect } from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { MainView } from "../main-view/main-view";
import { UpdateUser } from "./update-user";
import { Container } from "react-bootstrap";
import { FavoriteMovies } from "./favorite-movies";
import { UserInfo } from "./user-info";
import { DeregisterUser } from "./deregister-user";

export const ProfileView = ({ user, movies, onUpdatedUserInfo }) => {
  const favoriteMovies = movies.filter((m) =>
    user.FavoriteMovies.includes(m.id)
  );

  const handleSubmit = (e) => {};
  const handleUpdate = (e) => {};

  return (
    <Container>
      {/* <NavigationBar /> */}
      <UserInfo name={user.Username} email={user.Email} />
      <DeregisterUser username={user.Username} />
      <UpdateUser
        user={user}
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
      />
      <FavoriteMovies favoriteMovieList={favoriteMovies} />
    </Container>
  );
};
