import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { productSliceActions } from '../redux/productSlice';

function* manageProductMiddleware(){

    let data = yield fetch('https://dummyjson.com/products');

    data = yield data.json();

    yield put(productSliceActions.getProducts(data));
}

export default manageProductMiddleware