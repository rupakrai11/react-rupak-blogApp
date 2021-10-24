import "./sidebar.css";
import MyImg from "../../images/DSC_0600.JPG";
import { useEffect, useState } from "react";
import axios from "axios";

function SideBar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
      console.log(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sideabr ">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={MyImg} alt="my image" width="300px" />
        <p className="sidebarDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          blanditiis atque obcaecati, rerum quisquam aliquam recusandae voluptas
          vitae iste sed debitis repellendus, nihil quia veritatis optio beatae
          ipsam! Expedita, veritatis.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>

        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">{c.name}</li>
          ))}
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
