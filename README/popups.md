## Popups:

- install react-modal

  ```bash
  yarn add react-modal
  ```

- Create your custom popup, there are 2 examples that you might want to use in `components/popups`:

  - Simple popup: This popup is simple popup that its style can be change, and the content inject with children, you can make it close after some ms - `components/popups/simple-popup`:

    - Copy the popup component
    - Call this popup:

      ```jsx
      import { useRef } from 'react';
      import SimplePopup from '../components/popups/simple-popup/simple-popup';

      export default function Home() {
        const popupRef = useRef(null);

        const openPopup = () => {
          popupRef.current.openModal();
        };

        return (
          <div>
            <button onClick={openPopup}>open popup</button>
            <SimplePopup ref={popupRef}>
              <p>Modal Content</p>
            </SimplePopup>
          </div>
        );
      }
      ```

    - If you want to close it after 5ms, add prop `closeAfterMS`:

      ```jsx
      import SimplePopup from '../components/popups/simple-popup/simple-popup';

      <SimplePopup ref={popupRef} closeAfterMS={5000}>
        <p>Modal Content</p>
      </SimplePopup>;
      ```

    - If you want to animation of 300ms, in `components/popups/simple-popup/simple-popup.jsx` add prop `closeTimeoutMS` to `Modal` component:

      ```jsx
      import Modal from 'react-modal';

      <Modal closeTimeoutMS={300}>
        <button onClick={closeModel}>x</button>
        {children}
      </Modal>;
      ```

      and in `styles/_global-classes.scss` add css:

      ```scss
      .simplePopup {
        &.ReactModal__Overlay {
          opacity: 0;
          transition: opacity 300ms ease-in-out;
        }

        &.ReactModal__Overlay--after-open {
          opacity: 1;
        }

        &.ReactModal__Overlay--before-close {
          opacity: 0;
        }
      }
      ```

      you can custom the css by your needs, but the value of closeTimeoutMS and transition MS must to be the same.

  - Notification: This popup is notification popup that opnes from the screen right side, its style can be change, and the content inject with children, you can make it close after some ms - `components/popups/notification`:

    - Copy the popup component
    - Call this popup:

      ```jsx
      import { useRef } from 'react';
      import Notification from '../components/popups/notification/notification';

      export default function Home() {
        const notificationRef = useRef(null);

        const openNotification = () => {
          notificationRef.current.openModal();
        };

        return (
          <div>
            <button onClick={openNotification}>open notification</button>
            <Notification ref={notificationRef}>
              <p>Modal Content</p>
            </Notification>
          </div>
        );
      }
      ```

    - If you want to close it after 5ms, add prop `closeAfterMS`:

      ```jsx
      import Notification from '../components/popups/notification/notification';

      <Notification ref={notificationRef} closeAfterMS={3000}>
        <p>Modal Content</p>
      </Notification>;
      ```

    - If you want to animation of 300ms, in `components/popups/notification/notification.jsx` add prop `closeTimeoutMS` to `Modal` component:

      ```jsx
      import Modal from 'react-modal';

      <Modal closeTimeoutMS={300}>
        <button onClick={closeModel}>x</button>
        {children}
      </Modal>;
      ```

      and in `styles/_global-classes.scss` add css:

      ```scss
      .notification {
        &.ReactModal__Overlay {
          transition: transform 300ms;
          transform: translateX(100%);
        }

        &.ReactModal__Overlay--after-open {
          transform: none;
        }

        &.ReactModal__Overlay--before-close {
          transform: translateX(100%);
        }
      }
      ```

      you can custom the css by your needs, but the value of closeTimeoutMS and transition MS must to be the same.

- For more information read: [react-modal](http://reactcommunity.org/react-modal/)
