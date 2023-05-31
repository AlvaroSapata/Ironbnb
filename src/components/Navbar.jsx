import { NavLink } from "react-router-dom";

function Navbar() {
  // NavLink nos permite pasar una funcion de callback a className o a styles que nos dara informacion de si el enlace concuerda con el URL o no

  const activeClass = (navInfo) => {
    // console.log(navInfo);
    if (navInfo.isActive === true) {
      return "link-active";
    } else {
      return "Link-inactive";
    }
  };

  return (
    <nav>
      <NavLink className={activeClass} to="/">
        Home
      </NavLink>
      <NavLink className={activeClass} to="/pisos/list">
        Apt List
      </NavLink>
      <NavLink className={activeClass} to="/pisos/add">
        Add Apt
      </NavLink>
    </nav>
  );
}

export default Navbar;
