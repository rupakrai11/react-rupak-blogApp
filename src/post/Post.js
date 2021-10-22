import "./post.css";
import PostImg from "../images/nature.jpg";

function Post() {
  return (
    <div className="post">
      <img src={PostImg} alt="post-img" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">This is the natural.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ullam
        odio facere, explicabo quos, rerum id autem corrupti, reprehenderit
        suscipit in eius quam voluptatem itaque dolorem voluptatibus officiis
        dolore ipsam.
      </p>
    </div>
  );
}

export default Post;
