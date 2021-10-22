import "./topbar.css";
import Avatar from "../images/DSC_0600.JPG";
export default function TopBar() {
  return (
    <>
      <div className="topbar">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook"></i>
          <i className="topIcon fab fa-twitter"></i>
          <i className="topIcon fab fa-pinterest"></i>
          <i className="topIcon fab fa-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img src={Avatar} alt="Avatar" className="topImage" />
          <i className="searchIcon fas fa-search"></i>
        </div>
      </div>
    </>
  );
}
