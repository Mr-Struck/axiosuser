import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AxiosComment = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/comments",
    };
    axios
      .request(options)
      .then((resp) => setComments(resp.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Comments</h1>
      <div className="row4 head">
        <p>Comment ID</p>
        <p>User Name</p>
        <p>Email</p>
        <p>Caption</p>
      </div>
      {comments.map((comment, index) => {
        return (
          index < 10 && (
            <div className="column" key={comment.id}>
              <div className="row4">
                <p className="center">{comment.id}</p>
                <p>{comment.name}</p>
                <p>
                  <strong>{comment.email}</strong>
                </p>
                <p style={{ textAlign: "justify" }}>{comment.body}</p>
              </div>
            </div>
          )
        );
      })}
      <Link className="prev" to={"/post"}>
        Prev
      </Link>
      <Link className="next" to={"/photo"}>
        Next
      </Link>
    </div>
  );
};
