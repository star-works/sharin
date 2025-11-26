import { Link } from "react-router-dom";
import { LogoIcon, QuestionMarkIcon } from "../atoms/icon/Icon";
import Button from "../atoms/button/Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 sm:py-5">
      <Link to={"/"}>
        <LogoIcon />
      </Link>
      <Button variant="blank">
        <QuestionMarkIcon />
        Assistenza
        <span className="line-hover"></span>
      </Button>
    </nav>
  );
};

export default Navbar;
