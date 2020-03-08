import { FETCH_PRODUCTS } from '../Services/shelf/actionTypes';

const intialState = {
    products: [],
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                state['products']: action.payload
            };
        default:
            return state;
    }
}

export default reducer;