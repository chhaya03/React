import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={(e) => {
            return e.isActive ? "red" : " ";
          }}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/login"
          className={(e) => {
            return e.isActive ? "red" : " ";
          }}
        >
          <li>Login</li>
        </NavLink>

        <NavLink
          to="/about"
          className={(e) => {
            return e.isActive ? "red" : " ";
          }}
        >
          <li>About</li>
        </NavLink>

        <NavLink
          to="/user"
          className={(e) => {
            return e.isActive ? "red" : " ";
          }}
        >
          <li>User</li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
