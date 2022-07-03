import LoginStatus from '../components/login-status/login-status';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Set up project !!</h1>
      <LoginStatus />
    </div>
  );
}
