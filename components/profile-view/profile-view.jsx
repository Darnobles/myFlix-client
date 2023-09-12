import { useState, useEffect} from 'react';
import { NavigationBar } from "../navigation-bar/navigation-bar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MainView } from "../main-view/main-view";
import { UserUpdate } from "../user-update/user-update";
import { Container } from 'react-bootstrap';

export const ProfileView () => {

    const [ user, setUsername] = useState ([]);

    useEffect(() => {
        fetch("https://comic-flick-833dd2e0dd28.herokuapp.com/users")
            .then((response) => response.json())
            .then((data) => {
                const userFromApi = data.docs.map((doc) => {
                    return {
                       Username: user.username, 
                       Email: user.userEmail,
                       Birthday: user.userBirthday
                    };
                });
            setUsername(userFromApi);
            });
    }, []);

    const [ deregister, deregisterUser ] = useState ([]);

        useEffect(() => {
            fetch("https://comic-flick-833dd2e0dd28.herokuapp.com/users/:userName", {
                method: "DELETE",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
              }).then((response) => {
                if (response.ok) {
                  alert("User successfully removed");
                  window.location.reload();
                } else {
                  alert("Deletion failed");
                }
              });
        })



    return (
    
        <Container>
            <NavigationBar/>
            <UserUpdate/>
        </Container>
    )
};