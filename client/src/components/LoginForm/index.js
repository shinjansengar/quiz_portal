import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../services/service";
import "./index.scss";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    authenticate({
      id: username,
      password,
    })
      .then((res) => {
        if(res.username && res.token){
          sessionStorage.setItem("token", res.token);
          sessionStorage.setItem("username", res.username);
          navigate("/quiz", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="login_form_container">
      <form onSubmit={handleSubmit}>
        <div className="login_input">
          <input
            type="text"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="login_input">
          <input
            type="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="center-button">
          <button type="submit" className="login_submit">
            Login
          </button>
        </div>
      </form>
      <div className="center-button">
        <button onClick={() => navigate("/signup")} className="login_submit">
          Signup
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
