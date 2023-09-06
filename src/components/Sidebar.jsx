import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <p>List of cities</p>
      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; copyright {new Date().getFullYear} by WorldWise Inc.
      </p>
    </div>
  );
}

export default Sidebar;
