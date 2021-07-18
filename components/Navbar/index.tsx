import { ReactChild } from 'react'
import styles from './style.module.css';

type Navbar = {
  children: ReactChild[]
}

export const Navbar = ({children}: Navbar) => {
  return (
    <nav className={styles.navbar}>
      <ul>{children}</ul>
    </nav>
  );
}
