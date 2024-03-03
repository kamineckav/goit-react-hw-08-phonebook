import { NavLink } from 'react-router-dom';

import styles from './NavbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.block}>
      <NavLink to="/registration" className={styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
