import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import Posts from "../Posts/Posts";
import axios from "axios";
import NewPost from "../NewPost/NewPost";
import UpdatePost from "../UpdatePost/UpdatePost";

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://localhost:8000/posts")
        .then((res) => res.data)
        .catch((err) => console.log(err));
      setPosts(response);
    };

    fetchData();
  }, []);

  const deletePost = (id) => {
    // axios.delete(`http://localhost:8000/posts/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Posts
        allposts={posts}
        setSelectedPost={setSelectedPost}
        deletePost={(id) => deletePost(id)}
      />
      {/* posts(which is a state) being passed as a prop to Posts, therefore any change in posts, causes the Posts to re render */}
      <Post selectedPost={selectedPost} />
      <NewPost posts={posts} />
      <UpdatePost selectedPost={selectedPost} />
    </div>
  );
};

export default PostsContainer;
