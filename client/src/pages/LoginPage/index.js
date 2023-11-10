import LoginForm from "../../components/LoginForm";
import "./index.scss";

const LoginPage = () => {
  return (
    <>
      <div className="login_content">Login to access quiz</div>
      <div className="login_container">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
