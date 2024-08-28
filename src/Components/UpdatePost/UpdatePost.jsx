import { useEffect, useState } from "react";
import React from "react";
import "../NewPost/NewPost.css";
import axios from "axios";

const UpdatePost = (props) => {
  const [fullPost, setFullPost] = useState(null);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      await axios
        .get(`http://localhost:8000/posts/${props.selectedPost}`)
        .then((response) => {
          setFullPost(response.data);
        })
        .catch((err) => console.log(err));
    };
    fetchPost();
  }, [props.selectedPost]);

  const submitUpdatedPost = async () => {
    await axios.put(`http://localhost:8000/posts/${props.selectedPost}`, {
      userId: 1,
      title: title,
      body: body,
    });
  };

  return (
    <div className="newpost-container">
      <h1>Update the post ID: {props.selectedPost}</h1>
      <form>
        <div>
          <label htmlFor="newpost-title">Title: </label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            id="newpost-title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="newpost-body">Body: </label>
          <input
            type="text"
            placeholder="Enter Content"
            id="newpost-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit" onClick={submitUpdatedPost}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
