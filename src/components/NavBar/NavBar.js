import options from "./options";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const listItems = options.map((node) => {
    return (
      <li className="li" key={node.id.toString()}>
        <Link className="link" to={node.url}>
          {node.menu}
        </Link>
      </li>
    );
  });
  return <ul className="navigation">{listItems}</ul>;
};

export default NavBar;
