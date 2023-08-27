export const LoginView = () => {
    const handleSubmit = (event) =>
    {
        event.preventDefault();

        const data = {
            access: username,
            secret: password
        };
        fetch("https://comic-flick-833dd2e0dd28.herokuapp.com/",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json() )
        .then((data) => {
            console.log("Login response: ", data);
            if (data.user) {
                onLoggedIn(data.user, data.token);
            } else {
                alert("No such user");
            }
        })
        .catch((e) => {
            alert("Something went wrong");
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" />
            </label>
            <label>
                Password:
                <input type="password" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};