## Store

- install mobx

  ```bash
  yarn add mobx
  yarn add mobx-react-lite
  ```

- Add `services/store`, for each class (like `files`, `users` etc.) create file.

- Add `services/store/index.js` to import and export `store` module

- Look at the code in `services/store` to understand how the code should be written

- In `pages/_app.jsx` create store

  ```js
  import { RootModel, StoreProvider } from '../store/index';

  const store = new RootModel();

  function MyApp({ Component, pageProps }) {
    return (
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    );
  }

  export default MyApp;
  ```

- In order to use/display store values:

```jsx
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

export default observer(function Entry() {
  const store = useStore();
  const { isLoggedIn } = store.auth;

  return (
    <div>
      <span>{isLoggedIn ? 'logged' : 'logged out'}</span>
    </div>
  );
});
```
