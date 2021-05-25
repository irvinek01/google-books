import { Link } from "react-router-dom";
import Icon from "./icon.png";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="navbar navbar-light justify-content-center">
      <Link className="navbar-brand text-primary" exact="exact" to="/">
        Google Books
      </Link>
      <Link exact="exact" to="/">
        <div>
          <img src={Icon} alt="icon" />
        </div>
      </Link>
      <ul className="navbar-nav flex-col">
        <NavItems exact to="/">
          Search
        </NavItems>
        <NavItems exact to="/saved">
          Saved
        </NavItems>
      </ul>
    </nav>
  );
}

export default Navbar;
