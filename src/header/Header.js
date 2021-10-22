import "./header.css";
import BlogImg from "../images/nature.jpg";
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={BlogImg} alt="Blog-img" />
    </div>
  );
}

export default Header;
