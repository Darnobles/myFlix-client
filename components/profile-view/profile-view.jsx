import { useState, useEffect } from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { MainView } from "../main-view/main-view";
import { UpdateUser } from "./update-user";
import { Container } from "react-bootstrap";
import { FavoriteMovies } from "./favorite-movies";
import { UserInfo } from "./user-info";
import { DeregisterUser } from "./deregister-user";

export const ProfileView = () => {
  return (
    <Container>
      <NavigationBar/>
      <UserInfo name={user.Username} email={user.Email} />
      <DeregisterUser />
      <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
      <FavoriteMovies favoriteMovieList={favoriteMovieList} />
    </Container>
  );
};
