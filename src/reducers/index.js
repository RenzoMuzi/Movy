import { combineReducers } from 'redux';
import { errorReducer } from '@/reducers/ErrorReducer';
import { statusReducer } from '@/reducers/StatusReducer';
import { userReducer } from '@/reducers/UserReducer';
import { movieReducer } from '@/reducers/MovieReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  movies: movieReducer,
});
