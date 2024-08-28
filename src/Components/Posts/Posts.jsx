import React from "react";
import "./Posts.css";

const Posts = (props) => {
  return (
    <div className="posts-container">
      <h1>All Posts</h1>
      {props.allposts.length === 0 ? (
        <h4 style={{ color: "grey", fontStyle: "italic" }}>No Posts to show</h4>
      ) : (
        props.allposts.map((post) => {
          return (
            <li key={post.id} className="posts-container-post">
              <div
                className="post-body"
                onClick={() => {
                  props.setSelectedPost(post.id);
                }}
              >
                <p>ID: {post.id}</p>
                <p>Title: {post.title}</p>
              </div>
              <button onClick={() => props.deletePost(post.id)}>Delete</button>
            </li>
          );
        })
      )}
    </div>
  );
};

export default Posts;
