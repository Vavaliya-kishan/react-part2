//! two way binding
// "use client";
// import React, { useState } from "react";

// const page = () => {
//   const [username, setUsername] = useState(""); //! Creating A variable in react
//   return (
//     <div className="mb-2 text-2xl">
//       <>
//         <h1>Enter your name :</h1>
//         <form>
//           <input
//             type="text"
//             className="border-2 border-zinc-800 px-4 py-2 text-xl"
//             value={username}
//             onChange={(e) => {
//               setUsername(e.target.value);
//               console.log(username);
//             }}
//           />
//         </form>
//       </>
//     </div>
//   );
// };

// export default page;

//! routing and dyaminc routing

// import React from "react";
// const page = () => {
//   return (
//     <>
//       <div>
//         <h1 className="text-2xl font-bold">This is home page</h1>
//         <a href="/Contact">Contact US</a>
//       </div>
//     </>
//   );
// };
// export default page
// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// const page = () => {
//   const [users, setusers] = useState([]);
//   const getUser = async () => {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
// const data = res.data;
// console.log(data);
// setusers(data);
//   console.log(users);
// };
// getUser();
//   useEffect(() => {
//     getUser();
//   }, []);
//   return (
//     <>
//       <button
//         onClick={getUser}
//         className="bg-green-400 text-white px-4 py-2 rounded font-bold"
//       >
//         Get Data
//       </button>
//       <div className="p-8 bg-slate-100 mt-5 ">
//         <ul>
//           {users.map((e) => {
//             return (
//               <li>
//                 {e.username} - - - <a href={`/${e.id}`}>Explore</a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default page;

//! Context API
// "use client";

// import { MyContext } from "@/Helper/Context";
// import React, { useContext } from "react";
// // import Header from "@/Components/Header";
// // import Nav from "@/Components/Nav";

// const page = () => {
//   const user = useContext(MyContext);
//   console.log(user);

//   return (
//     <div className="bg-green-200 p-5">
//       this is home page
//       {user}
//       {/* <Nav /> */}
//       {/* <Header /> */}
//     </div>
//   );
// };

// export default page;

//! Flash Messages ( React Tostify)
// "use client";
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const page = () => {
//   const notify = () => {
//     toast.success('🦄 Wow so easy!', {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       });
//   };
//   return (
//     <div>
//       <button onClick={notify}> Login</button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default page;

//! Server side rendring and client side rendring
// "use client";
// import axios from "axios";
// import React, { useState } from "react";

// const page = () => {
//   const [userdata, Setuserdata] = useState("Hello");
//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list");
//   const a =JSON.stringify(response.data)
//   console.log(a);
//     Setuserdata(a);
//   };

//   return (
//     <div>
//       <button onClick={getData}>
//         Click
       
//       </button>
//       {userdata}
//     </div>
//   );
// };

// export default page;

//! Deployment
import React from 'react'

const page = () => {
  return (
    <div>
        Deployment
    </div>
  )
}

export default page
