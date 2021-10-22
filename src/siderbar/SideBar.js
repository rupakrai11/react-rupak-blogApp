import "./sidebar.css";
import MyImg from "../images/DSC_0600.JPG";

function SideBar() {
  return (
    <div className="sideabr ">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={MyImg} alt="my image" width="300px" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.amet
          consectetur, adipisicing elit
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-pinterest"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
