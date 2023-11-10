import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const userLoggedIn = sessionStorage.getItem('token') === 'loggedIn';
    
    if(userLoggedIn){
        return children;
    }

    return <Navigate to="/" replace={true} />
};

export default PrivateRoute;
