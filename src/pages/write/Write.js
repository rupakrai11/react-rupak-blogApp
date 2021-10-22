import "./write.css";
import NewImg from "../../images/nature.jpg";

export default function Write() {
  return (
    <div className="wite">
      <img src={NewImg} alt="New Image" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }}></input>
          <input
            type="text"
            placeholder="title"
            className="writeInput"
            autoFocus={true}
          ></input>
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Write Your Blog"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
