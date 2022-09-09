import styles from "../styles/nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faGlobe } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../atoms/SearchBar";
import { Button } from "../atoms/Button";
const Nav = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <a href="#">Categories</a>
        <SearchBar classname={styles.search} />
        <FontAwesomeIcon icon={faCartShopping} />
        <Button classname={styles.login} text="Log in" />
        <Button classname={styles.signup} text="Sign up" />
        <FontAwesomeIcon icon={faGlobe} />
      </nav>
    </header>
  );
};

export default Nav;
