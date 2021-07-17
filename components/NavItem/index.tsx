import styles from './style.module.css'

type NavItem = {
  color: string;
  text: string;
}

export const NavItem = ({color, text}: NavItem) => {

  const checkColor = () => {
  }
  
  return (
      <li className={styles.navitem}>
        {text}
      </li>
    )
  }