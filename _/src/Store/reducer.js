import { FETCH_PRODUCTS } from '../Services/shelf/actionTypes';
import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from '../Services/shelf/actionTypes';
import { UPDATE_CART } from '../Services/total/actionTypes';


const intialState = {
    products: [],
    data: {
        productQuantity: 0,
        installments: 0,
        totalPrice: 0,
        currencyId: 'USD',
        currencyFormat: '$'
    }
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };

        case LOAD_CART:
            return {
                ...state,
                products: action.payload
            };
        case ADD_PRODUCT:
            return {
                ...state,
                productToAdd: Object.assign({}, action.payload)
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                productToRemove: Object.assign({}, action.payload)
            };
        case CHANGE_PRODUCT_QUANTITY:
            return {
                ...state,
                productToChange: Object.assign({}, action.payload)
            };
        case UPDATE_CART:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default reducer;