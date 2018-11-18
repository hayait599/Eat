import { all, fork } from 'redux-saga/effects'; 
import { authSaga } from './authSaga'; 
import { setupSaga } from './setupSaga'; 
import { searchSaga } from './searchSaga'; 
import { getDetailsSaga } from './getDetailsSaga'; 
import { sendDataSaga } from './sendDataSaga'; 

/**
 * Used to define the root saga 
 * 
 * @generator
 * @yields {fork} authSaga.
 * @yields {fork} setupSaga.
 * @yields {fork} searchSaga.
 * @yields {fork} getDetailsSaga.
 */
export default function* root() { 
  yield all([ 
    fork(authSaga), 
    fork(setupSaga), 
    fork(searchSaga), 
    fork(getDetailsSaga),
    fork(sendDataSaga)
  ]); 
}
