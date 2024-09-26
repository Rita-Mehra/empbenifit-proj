import { combineReducers } from 'redux';

import auth from './reducers/auth-user';

const reducers = combineReducers({
  auth
});

export default reducers;