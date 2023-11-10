import { Navigate } from "react-router-dom";

const IsLoggedIn = ({ children }) => {
    if (sessionStorage.getItem("token") === "loggedIn") {
        return <Navigate to="/quiz" replace={true} />
    }
    
    return children;
};

export default IsLoggedIn;
