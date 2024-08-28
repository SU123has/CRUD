import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Post.css";

const Post = (props) => {
  const [fullPost, setFullPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      await axios
        .get(`http://localhost:8000/posts/${props.selectedPost}`)
        .then((response) => {
          setFullPost(response.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetchPost();
  }, [props.selectedPost]);

  return (
    <div className="read-post">
      {isLoading && fullPost ? (
        <div className="loader"></div>
      ) : fullPost ? (
        <>
          <p>
            <b>ID:</b> {fullPost.id}
          </p>
          <p>
            <b>Title:</b> {fullPost.title}
          </p>
          <p>
            <b>Content:</b> {fullPost.body}
          </p>
        </>
      ) : (
        <h2>Select a post</h2>
      )}
    </div>
  );
};

export default Post;
