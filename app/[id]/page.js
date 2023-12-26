"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const page = ({ params }) => {
  const { id } = params;

  const [users, setusers] = useState([]);
  const getUser = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );

    // const data = res.data;
    // console.log(data.username);
    setusers(data);
    //   console.log(users);
  };
  // getUser();
  useEffect(() => {
    getUser();
  }),
    [];

  return <div> {JSON.stringify(users)}</div>;
};
export default page;
