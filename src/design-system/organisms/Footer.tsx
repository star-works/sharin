import { Link } from "react-router-dom";

const Footer: React.FC<FooterProps> = ({ item }) => {
  return <Link to={item.href}>{item.label}</Link>;
};

export default Footer;
