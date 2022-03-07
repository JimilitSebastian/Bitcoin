import {call, put, takeEvery } from  'redux-saga/effects';
import {GET_BITCOINDATA_FETCH,GET_BITCOINDATA_SUCCESS,GET_BITCOINDETAILS_FETCH,GET_BITCOINDETAILS_SUCCESS} from './actions';


function bitcoinFetch(){
    return fetch('https://api2.binance.com/api/v3/ticker/24hr').then(response => response.json())
}

function bitcoinDetailsFetch(symbol){
    
   return fetch(`https://api2.binance.com/api/v3/klines?symbol=${symbol}&interval=1h&startTime=1645660800000`).then(response => response.json())
}

function* workGetBitCoinDetailsFetch({payload}){ 
    console.log(payload);   
     const bitcoin_details = yield call(bitcoinDetailsFetch,payload.symbol)
    yield put({type : GET_BITCOINDETAILS_SUCCESS, bitcoin_details})
}

function* workGetBitCoinFetch(){
    const bitcoin = yield call (bitcoinFetch);
    yield put ({type : GET_BITCOINDATA_SUCCESS, bitcoin})
}




function* mySaga() {
    yield takeEvery(GET_BITCOINDATA_FETCH, workGetBitCoinFetch)
    yield takeEvery(GET_BITCOINDETAILS_FETCH, workGetBitCoinDetailsFetch)
}



export default mySaga;