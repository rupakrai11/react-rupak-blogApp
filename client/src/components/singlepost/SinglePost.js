import "./singlepost.css";
import SinglePostImg from "../../images/nature.jpg";

export default function SinglePost() {
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            src={SinglePostImg}
            alt="single post image"
            className="singlePostImg"
          />
          <h1 className="singlePostTitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <div className="singlePostEdit">
              <i className="singlePostIcon fas fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author:<b>Rupak</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            corrupti doloribus magni quidem laudantium debitis nam consequuntur
            nemo enim deserunt eveniet nobis assumenda, ut eligendi et tempore
            ducimus sed. Quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum corrupti doloribus magni quidem laudantium
            debitis nam consequuntur nemo enim deserunt eveniet nobis assumenda,
            ut eligendi et tempore ducimus sed. Quibusdam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nostrum corrupti doloribus magni
            quidem laudantium debitis nam consequuntur nemo enim deserunt
            eveniet nobis assumenda, ut eligendi et tempore ducimus sed.
            Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum corrupti doloribus magni quidem laudantium debitis nam
            consequuntur nemo enim deserunt eveniet nobis assumenda, ut eligendi
            et tempore ducimus sed. Quibusdam.
          </p>
        </div>
      </div>
    </>
  );
}
