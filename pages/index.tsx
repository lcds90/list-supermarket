import styles from '../styles/Home.module.css';
import { Navbar } from '../components/Navbar';
import { NavItem } from '../components/NavItem';
export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <Navbar>
          <NavItem text='Home' color='primary'/>
          <NavItem text='Item 1' color='secondary' />
          <NavItem text='Item 2' color='tertiary' />
        </Navbar>

      

      </main>
    </>
  );
}
