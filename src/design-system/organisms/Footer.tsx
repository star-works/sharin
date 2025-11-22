import { Link } from "react-router-dom";

const Footer: React.FC<FooterProps> = ({ item }) => {
  return (
    <Link className="group relative" to={item.href}>
      {item.label}
      <span className="bg-secondary absolute -bottom-px left-0 h-px w-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </Link>
  );
};

export default Footer;
