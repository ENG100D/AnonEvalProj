import {
  createStore,
  applyMiddleware
} from 'redux';
import { combineForms } from 'react-redux-form';

const initialUserState = {
  pid: '',
};

const store = createStore(combineForms({
  user: initialUserState,
}));

export default store;
