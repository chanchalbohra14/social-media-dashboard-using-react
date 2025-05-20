import React, { useEffect, useState } from "react";
import "./Albums.css";
import axios from "axios";
import { BeatLoader } from "react-spinners";
const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albums = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        setAlbums(albums.data);
        setLoading(false);
      } catch (error) {
        console.log("failed to fetch comments", error);
      }
    };
    fetchAlbums();
  }, []);
  if (loading)
    return (
      <div className="loader">
        {" "}
        <BeatLoader />
      </div>
    );
  return (
    <div>
      <h1>Albums</h1>
      <div className="albums-card">
        {albums.slice(0, 40).map((e) => (
          <div key={e.id}>
            <p>{e.id}</p>
            <p>{e.title.slice(0, 10)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
