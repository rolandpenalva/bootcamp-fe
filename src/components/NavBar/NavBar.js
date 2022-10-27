import options from "./options";
import { Link } from "react-router-dom";
import "./NavBar.css";

function createMenuBar (options, ulClass, liClass, linkClass){
  let items = options.map((node)=>{

      if(node.sub && node.sub.length > 0){
        return(
        <li className="li" key={node.id.toString()}>
          <Link className="link" to="#">
          {node.menu}
          </Link>
          {createMenuBar(node.sub, ulClass,liClass)}
        </li>)   
      }else{
        return(
        <li className="li" key={node.id.toString()}>
          <Link className="link" to={node.url}>
            {node.menu}
          </Link>
        </li>)
      }
  });

  return <ul className={ulClass}>{items}</ul>
}

const NavBar = (props) => {
  const result = createMenuBar(options,"navigation","li","link");

  console.log(result);
  // const listItems = options.map((node) => {
  //   return (
  //     <li className="li" key={node.id.toString()}>
  //       <Link className="link" to={node.url}>
  //         {node.menu}
  //       </Link>
  //     </li>
  //   );
  // });
  // return <ul className="navigation">{listItems}</ul>;
  return result;
};

export default NavBar;
