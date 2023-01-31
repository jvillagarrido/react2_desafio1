import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)
  return (
    <nav className="navbar">
      
      <NavLink className={ setActiveClass }  to="/"> Home </NavLink> | <NavLink  className={ setActiveClass }  to="/pokemones"> Pokemones </NavLink>

    </nav>
  );
}
