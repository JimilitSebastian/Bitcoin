import { GET_BITCOINDATA_SUCCESS,GET_BITCOINDETAILS_SUCCESS } from "./actions";


const reducer = (state = {bitcoin: [] } ,  action) => {
    switch (action.type){
        case GET_BITCOINDATA_SUCCESS:
            return{
                ...state, 
                bitcoin: action.bitcoin
            }

        case GET_BITCOINDETAILS_SUCCESS:
            return{
                ...state, 
                bitcoin_details: action.bitcoin_details
            }

        default:
            return state;
    }
};



export default reducer;