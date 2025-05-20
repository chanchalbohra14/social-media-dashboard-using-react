import React, { useEffect, useState } from "react";
import "./Photos.css";
import axios from "axios";
import { BeatLoader } from "react-spinners";
const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const photos = await axios.get("https://api.escuelajs.co/api/v1/users");
        setPhotos(photos.data);
        console.log(photos.data);
        setLoading(false);
      } catch (error) {
        console.log("failed to fetch comments", error);
      }
    };
    fetchPosts();
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
      <h1>Photos</h1>
      <div className="photos-card">
        {photos.slice(0, 8).map((e) => (
          <div key={e.id}>
            <p>{e.email}</p>
            <p>{e.name}</p>
            <p>{e.role}</p>
            <img src={e.avatar} alt="avatar" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
