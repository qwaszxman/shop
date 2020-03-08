import { FETCH_PRODUCTS } from '../Services/shelf/actionTypes';
import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from '../Services/cart/actionTypes';
import { UPDATE_CART } from '../Services/total/actionTypes';
import { UPDATE_FILTER } from '../Services/filters/actionTypes';
import { UPDATE_SORT } from '../Services/sort/actionTypes';

const reducer = (state, action) => {
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
        case UPDATE_FILTER:
            return {
                ...state,
                items: action.payload
            };
        case UPDATE_SORT:
            return {
                ...state,
                type: action.payload
            };
        default:
            return state;
    }
}

export default reducer;