import options from "./options";
import { Link } from "react-router-dom";
import "./NavBar2.css";

function createMenuBar(options, ulClass) {
  let items = options.map((node) => {
    if (node.sub && node.sub.length > 0) {
      return (
        <li key={node.id.toString()}>
          <Link to="#">{node.menu}</Link>
          {createMenuBar(node.sub, "subClass")}
        </li>
      );
    } else {
      return (
        <li key={node.id.toString()}>
          <Link to={node.url}>{node.menu}</Link>
        </li>
      );
    }
  });

  // return items;
  return <ul className={ulClass}>{items}</ul>;
}

const NavBar = (props) => {
  let isLogIn = true;
  if (isLogIn) {
    const result = createMenuBar(options, "navBar");
    return result;
  } else {
    return <></>;
  }
};

export default NavBar;
