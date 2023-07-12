import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AxiosPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      setPosts(resp.data);
    });
  });
  return (
    <div>
      <h1>Posts</h1>
      <div className="row3 head">
        <p>Post ID</p>
        <p>Title</p>
        <p>Caption</p>
      </div>
      {posts.map((post, index) => {
        return (
          index < 10 && (
            <div className="column" key={post.id}>
              <div className="row3">
                <p className="center">{post.id}</p>
                <p>
                  <strong>{post.title}</strong>
                </p>
                <p style={{ textAlign: "justify" }}>{post.body}</p>
              </div>
            </div>
          )
        );
      })}
      <Link className="prev" to={"/todo"}>
        Prev
      </Link>
      <Link className="next" to={"/comment"}>
        Next
      </Link>
    </div>
  );
};
