import SignupForm from "../../components/SignupForm";
import "./index.scss";

const SignupPage = () => {
  return (
    <>
      <div className="signup_content">Signup to access quiz</div>
      <div className="signup_container">
        <SignupForm />
      </div>
    </>
  );
};

export default SignupPage;
