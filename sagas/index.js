import { all, fork } from 'redux-saga/effects';

import post from './post';
import posts from './posts';
import user from './user';

export default function* rootSaga() {
  yield all([
    fork(post),
    fork(posts),
    fork(user),
  ]);
}
