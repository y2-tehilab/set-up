## Api requests:

- install axios

  ```bash
  yarn add axios
  ```

- Add `services/api` folder, for each routes group (like `files`, `users` etc.) create file.

- Add `services/api/index.js` to import and export `api` module

- Look at the code in `services/api` to understand how the code should be written

- In order to call api:

  ```jsx
  import { getEntry } from '../../services/api';

  useEffect(() => {
    const initEntry = async () => {
      const entryByQuery = await getEntry(router.query.id);
      setEntry(entryByQuery);
    };
    initEntry();
  }, []);
  ```
