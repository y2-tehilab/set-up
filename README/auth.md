## Auth

- Short explanation about the code, when the user register to site it keeps the access token that return from the api in `cookie`, and in `axios.defaults.headers.common.Authorization` for all the next requests in this session. When the site load it send request with the access token cookie to the server if the token valid the api return all the user details, and it kept in store.

- Add 'js-cookie' package to keep the user token in cookie

  ```bash
  yarn add js-cookie
  ```

- Auth service:

  - Add `api/auth.js` file with its auth methods (you can change it to fit your needs like 2FA, etc.)
  - Add `setAuthToken` and `removeAuthToken` methods to `api/index.js` (in order to have the 'login', 'logout' options)

- Auth store:

  - Add `store/auth.model.js` file with its auth methods (you can change it to fit your needs like 2FA, etc.)
  - Add AuthModel to RootModel
  - Implement store by the instructions in `store.md` file

- Init user details on site load, on `_app.jsx`:

  ```jsx
  import '../styles/globals.scss';
  import { RootModel, StoreProvider } from '../services/store/index';
  import { useEffect } from 'react';

  const store = new RootModel();

  function MyApp({ Component, pageProps }) {
    const initUserDetails = async () => {
      await store.auth.getUserData();
    };

    useEffect(() => {
      initUserDetails();
    }, []);

    return (
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    );
  }

  export default MyApp;
  ```
