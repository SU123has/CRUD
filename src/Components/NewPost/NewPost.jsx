import React, { useState } from "react";
import "./NewPost.css";
import axios from "axios";

const NewPost = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const submitPost = async () => {
    await axios.post("http://localhost:8000/posts", {
      userId: 1,
      title: title,
      body: body,
    });
  };
  return (
    <div className="newpost-container">
      <h2>Enter a NEW POST</h2>
      <form>
        <div>
          <label htmlFor="newpost-title">Enter post title: </label>
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
          <label htmlFor="newpost-body">Enter post body: </label>
          <input
            type="text"
            placeholder="Enter Content"
            id="newpost-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit" onClick={submitPost}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
