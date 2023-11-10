import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/icons/logo.png";
import LogoutIcon from "../../assets/icons/logout.webp";
import "./index.scss";

const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(sessionStorage.getItem("username"));
  }, [sessionStorage.getItem("token")]);

  return (
    <>
      <header>
        <div className="logo_container">
          <img src={LogoIcon} alt="logo" onClick={() => navigate("/")} />
          <div className="header_info">
            <h3>Benesse India</h3>
            {username && (
              <>
                <p>Hi! {username}</p>
                <p
                  onClick={() => {
                    sessionStorage.clear();
                    navigate("/");
                  }}
                  style={{cursor:"pointer"}}
                >
                  <img src={LogoutIcon} className="logout_icon" alt="logout"/>
                </p>
              </>
            )}
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
