// export const LoginView = () => {
//     const handleSubmit = (event) =>
//     {
//         event.preventDefault();

//         const data = {
//             access: username,
//             secret: password
//         };
//         fetch("https://comic-flick-833dd2e0dd28.herokuapp.com/",{
//             method: "POST",
//             body: JSON.stringify(data)
//         });
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Username:
//                 <input type="text" />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" />
//             </label>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };