import { put, takeLatest, all, call, select } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import {
  Alert
} from 'react-native';
import axios from 'axios';
import { getRoute } from './../services/Api';
import {
  SEND_ORDER,
  SETTINGS,
  NOTIFICATIONS_STATE
} from './../constants/ActionTypes';
import User from './../repository/User';
/*
 * Selector. Select the filteredObject state
 */
export const accessToken = (state) => state.Authentication.token;
/**
 * Generates the send order reauest.
 *
 * @generator 
 */
function* sendOrder(action) {
  const order = action.payload;
  try {
    const response = yield call(axios.post, getRoute('sendOrder'), {
      id: order.id,
      mobile: order.mobile,
      address: order.address,
      dishes: order.dishes
    });
    if (parseInt(response.data, 20) > 0) {
      yield Actions.homeScreen();
      yield Alert.alert('', 'تم ارسال طلبك بنجاح');
    }
  } catch (error) {
    Alert.alert('', 'Send order faild please check the technical support');
  }
}
/**
 * Generates the send order reauest.
 *
 * @generator 
 */
function* notificationsSetting(action) {
  const settingsOption = action.payload;
  const token = yield select(accessToken);
  const id = yield User.getUserId();
  try {
    if (settingsOption) {
      yield User.updateNotifications(true);
      yield put({ type: NOTIFICATIONS_STATE, payload: true });
      const response = yield call(axios.post, getRoute('enableNotifications'), {
        id,
        token
      });
    } else {
      yield User.updateNotifications(false);
      yield put({ type: NOTIFICATIONS_STATE, payload: false });
      const response = yield call(axios.delete, getRoute('disableNotifications') +
        '?id=' + id + '&token=' + token);
    }
  } catch (error) {
    Alert.alert('', 'Please check your internet connection');
  }
}
/**
 * Used for making Api requests
 * 
 * @generator
 */
export function* sendDataSaga() {
  yield takeLatest(SEND_ORDER, sendOrder);
  yield takeLatest(SETTINGS, notificationsSetting);
}
