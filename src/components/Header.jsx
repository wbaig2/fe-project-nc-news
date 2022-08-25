import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Header = () => {
  const { username } = useContext(UserContext);
  return (
    <div className="header">
      <h4>Welcome {username}!</h4>
      <h1>NC News</h1>
    </div>
  );
};

export default Header;
