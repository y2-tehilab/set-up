import { useRef } from 'react';
import BasicForm from '../components/basic-form/basic-form';
import LoginStatus from '../components/login-status/login-status';
import Notification from '../components/popups/notification/notification';
import SimplePopup from '../components/popups/simple-popup/simple-popup';
import styles from './index.module.scss';

export default function Home() {
  const popupRef = useRef(null);
  const notificationRef = useRef(null);

  const openPopup = () => {
    popupRef.current.openModal();
  };

  const openNotification = () => {
    notificationRef.current.openModal();
  };

  return (
    <div className={styles.home}>
      <h1>Set up project !!</h1>

      <strong>Use Mobx state:</strong>
      <LoginStatus />

      <strong>Popup:</strong>
      <button onClick={openPopup}>open popup</button>
      <SimplePopup ref={popupRef} closeAfterMS={5000}>
        <p>Modal Content</p>
      </SimplePopup>

      <strong>Notification:</strong>
      <button onClick={openNotification}>open notification</button>
      <Notification ref={notificationRef}>
        <p>Modal Content</p>
      </Notification>

      <strong>Forms:</strong>
      <BasicForm />
    </div>
  );
}
