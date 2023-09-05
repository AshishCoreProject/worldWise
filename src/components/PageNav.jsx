import { NavLink, Link } from "react-router-dom";

function PageNav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/pricing"> Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/pricing"> Pricing</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
//Link component does the same thing but NavLink component add the active class
//to the current page when we inspect the code.

export default PageNav;
