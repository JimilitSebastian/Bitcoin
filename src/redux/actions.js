
export const GET_BITCOINDATA_FETCH = 'GET_BITCOINDATA_FETCH';
export const GET_BITCOINDATA_SUCCESS = 'GET_BITCOINDATA_SUCCESS';
export const GET_BITCOINDETAILS_FETCH = 'GET_BITCOINDETAILS_FETCH';
export const GET_BITCOINDETAILS_SUCCESS = 'GET_BITCOINDETAILS_SUCCESS';

export const getBitCoinFetch = () => {
    return {
        type : GET_BITCOINDATA_FETCH
    }
}

export const getBitCoinDetailsFetch = (payload) => {
    return {
        type : GET_BITCOINDETAILS_FETCH,
        payload
    }
}


