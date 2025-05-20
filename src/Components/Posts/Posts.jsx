import axios from "axios";
import { useEffect, useState } from "react";
import "./Posts.css";
import { BeatLoader } from "react-spinners";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(posts.data);
        setLoading(false);
      } catch (error) {
        console.log("failed to fetch posts", error);
      }
    };
    fetchPosts();
  }, []);
  if (loading)
    return (
      <div className="loader">
        <BeatLoader />
      </div>
    );
  return (
    <div>
      <h1>Posts</h1>
      <div className="posts-card">
        {posts.slice(0, 40).map((e) => (
          <div key={e.id}>
            <p>{e.title.slice(0, 5)}</p>
            <p>{e.body.slice(0, 20)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
