import { useState, useEffect } from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { MainView } from "../main-view/main-view";
import { UpdateUser } from "./update-user";
import { Container } from "react-bootstrap";
import { FavoriteMovies } from "./favorite-movies";
import { UserInfo } from "./user-info";

export const ProfileView = () => {
  

  return (
    <Container>
      <NavigationBar />
      <UserInfo name={user.Username} email={user.Email} />
      <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
      <FavoriteMovies favoriteMovieList={favoriteMovieList} />
    </Container>
  );
};
