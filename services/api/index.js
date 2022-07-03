import { setAuthUserToken, removeAuthUserToken } from './auth';
import { setAuthEntriesToken, removeAuthEntriesToken } from './entries';

export const setAuthToken = (token) => {
  setAuthUserToken(token);
  setAuthEntriesToken(token);
};

export const removeAuthToken = () => {
  removeAuthUserToken();
  removeAuthEntriesToken();
};

export * from './entries';

export * from './auth';
