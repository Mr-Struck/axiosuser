import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AxiosPhoto = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos",
    };
    axios
      .request(options)
      .then((resp) => setPhotos(resp.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Photos</h1>
      <div className="row5 head">
        <p>Photo ID</p>
        <p>Title</p>
        <p>URL</p>
        <p>Thumbnail URL</p>
      </div>
      {photos.map((photo, index) => {
        return (
          index < 10 && (
            <div className="column" key={photo.id}>
              <div className="row5">
                <p className="center">{photo.id}</p>
                <p>
                  <strong>{photo.title}</strong>
                </p>
                <p className="center">
                  <a href={photo.url} rel="noreferrer" target="_blank">
                    Open URL
                  </a>
                </p>
                <p className="center">
                  <a href={photo.thumbnailUrl} rel="noreferrer" target="_blank">
                    Open Thumbnail
                  </a>
                </p>
              </div>
            </div>
          )
        );
      })}
      <Link className="prev" to={"/comment"}>
        Prev
      </Link>
      <Link className="next" to={"/store"}>
        Next
      </Link>
    </div>
  );
};
