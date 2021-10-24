import "./post.css";
import PostImg from "../../images/nature.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Post({ post }) {
  return (
    <div className="post">
      {post.photo && (
        <img src={post.photo} alt="post-img" className="postImg" />
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
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default Post;
