import styles from './style.module.css';

export const Navbar = (props: any) => {
  return (
    <nav className={styles.navbar}>
      <ul>{props.children}</ul>
    </nav>
  );
}
