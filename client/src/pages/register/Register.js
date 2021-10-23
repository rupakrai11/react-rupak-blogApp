import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form className="registerForm">
        <label htmlFor="">Username</label>
        <input
          className="registerInput "
          type="email"
          name=""
          id=""
          placeholder="Enter Your Username..."
        />
        <label htmlFor="">Email</label>
        <input
          className="registerInput "
          type="email"
          name=""
          id=""
          placeholder="Enter Your Email..."
        />
        <label htmlFor="">Password</label>
        <input
          className="registerInput "
          type="password"
          name=""
          id=""
          placeholder="Enter Your Password"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
}

export default Register;
