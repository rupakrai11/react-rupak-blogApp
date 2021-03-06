import "./post.css";
import PostImg from "../../images/nature.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img src={PF + post.photo} alt="post-img" className="postImg" />
      )}
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{post.categories}</span>
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <Link to={`/?user=${post.username}`} className="link">
          <b> {post.username} </b>
        </Link>
        {/* <span className="postArthur" style={{ color: "gray" }}>
          Author: {post.username}
        </span> */}
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default Post;
