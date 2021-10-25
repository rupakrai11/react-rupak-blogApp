import "./topbar.css";
import Avatar from "../../images/DSC_0600.JPG";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <div className="topbar">
        <div className="topLeft">
          <h2>
            <Link to="/" className="link">
              BLOG
            </Link>
          </h2>
          {/* <i className="topIcon fab fa-facebook"></i>
          <i className="topIcon fab fa-twitter"></i>
          <i className="topIcon fab fa-pinterest"></i>
          <i className="topIcon fab fa-instagram"></i> */}
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>

            <li className="topListItem">
              {" "}
              <Link to="/write" className="link">
                WRITE
              </Link>
            </li>

            <li className="topListItem" onClick={handleLogout}>
              {" "}
              <Link to="/" className="link ">
                {user && "LOGOUT"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link to="/settings" className="link">
              <img
                src={PF + user.profilePic}
                alt="Avatar"
                className="topImage"
              />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="link">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}

          <i className="searchIcon fas fa-search"></i>
        </div>
      </div>
    </>
  );
}
