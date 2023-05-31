import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div>
      <h3>We are sorry, server is under maintenance</h3>

      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default Error;
