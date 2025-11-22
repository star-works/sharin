import { Link } from "react-router-dom";
import { LogoIcon } from "../atoms/icon/Icon";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link to={"/"}>
        <LogoIcon />
      </Link>
      <button className=""></button>
    </nav>
  );
};

export default Navbar;
