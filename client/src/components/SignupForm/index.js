import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/service";
import "./index.scss";

const SignupForm = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    setUserDetails({ ...userDetails, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userDetails)
      .then((res) => {
        if(res.username && res.token){
          sessionStorage.setItem("token", res.token);
          sessionStorage.setItem("username", res.username);
          navigate("/quiz", { replace: true });
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="signup_form_container">
      <form onSubmit={handleSubmit}>
        <div className="signup_input">
          <input
            name="username"
            type="text"
            autoComplete="off"
            value={userDetails.username}
            onChange={handleInput}
            placeholder="Username"
          />
        </div>
        <div className="signup_input">
          <input
            name="email"
            type="email"
            autoComplete="off"
            value={userDetails.email}
            onChange={handleInput}
            placeholder="Email"
          />
        </div>
        <div className="signup_input">
          <input
            name="password"
            type="password"
            autoComplete="off"
            value={userDetails.password}
            onChange={handleInput}
            placeholder="Password"
          />
        </div>
        <div className="center-button">
          <button type="submit" className="signup_submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
