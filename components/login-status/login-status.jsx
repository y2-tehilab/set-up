import styles from './login-status.module.scss';
import { useStore } from '../../services/store/index';
import { observer } from 'mobx-react-lite';

function LoginStatus() {
  const store = useStore();

  const { isLoggedIn } = store.auth;

  return (
    <div className={styles.loginStatus}>
      <span>status: {isLoggedIn ? 'logged in' : 'logged out'}</span>
    </div>
  );
}

export default observer(LoginStatus);
