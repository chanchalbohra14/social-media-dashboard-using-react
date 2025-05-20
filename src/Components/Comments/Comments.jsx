import React, { useEffect, useState } from "react";
import "./Comments.css";
import axios from "axios";
import { BeatLoader } from "react-spinners";
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(comments.data);
        setLoading(false);
      } catch (error) {
        console.log("failed to fetch comments", error);
      }
    };
    fetchComments();
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
      <h1>Comments</h1>
      <div className="comments-card">
        {comments.slice(0, 40).map((e) => (
          <div key={e.id}>
            <p>{e.name.slice(0, 5)}</p>
            <p>{e.email}</p>
            <p>{e.body.slice(0, 20)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
