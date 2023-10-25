import logoImg from "../../assets/Logo.svg";
import styles from "./Logo.module.css";

function LogoComponent() {
  return <img src={logoImg} className={styles.logo} alt="Todo App" />;
}

export default LogoComponent;
