import styles from '@styles/Home.module.css';
import { Navbar } from '@components/Navbar';
import { NavItem } from '@components/NavItem';
import { database } from '@services/firebase';
export default function Home() {
  // const connection = database.
  return (
    <>
      <main className={styles.container}>
        <Navbar>
          <NavItem text='Home' color='primary'/>
          <NavItem text='Item 1' color='secondary' />
          <NavItem text='Item 2' color='tertiary' />
        </Navbar>
        <hr />
        <div>
          teste
        </div>
      </main>
    </>
  );
}
