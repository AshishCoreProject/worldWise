import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/pricing"> Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/login"> Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
//Link component does the same thing but NavLink component add the active class
//to the current page when we inspect the code.

export default PageNav;
