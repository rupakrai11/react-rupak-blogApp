import "./home.css";
import Header from "../../components/header/Header";
import Posts from "./../../components/posts/Posts";
import SideBar from "../../components/siderbar/SideBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}

export default Home;
