import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AxiosUser = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setUserData(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>UserList</h1>
      <div className="row head">
        <p>User ID</p>
        <p>Name</p>
        <p>Company</p>
        <p>Email</p>
        <p>City & Zipcode</p>
      </div>
      {userData.map((data) => {
        return (
          <div className="column" key={data.id}>
            <div className="row">
              <p className="center">{data.id}</p>
              <p>
                <strong>{data.name}</strong>
              </p>
              <p>{data.company.name}</p>
              <p>
                <b>{data.email}</b>
              </p>
              <address>
                <p>{data.address.city}</p>
                <p>{data.address.zipcode}</p>
              </address>
            </div>
          </div>
        );
      })}
      <Link className="next" to={"/todo"}>
        Next
      </Link>
    </div>
  );
};
