import { FETCH_PRODUCTS } from './actionTypes';
import axios from 'axios';

import { productsAPI } from '../util';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

const fetchDataAction = (filters, sortBy, callback) => {

};

export const fetchProducts = (filters, sortBy, callback) => async (dispatch) => {

  // export const fetchProducts = async (filters, sortBy, callback) => {
  // export const fetchProducts = async (filters, sortBy, callback) => {

  const data = await fetch(productsAPI);
  const dataJSON = await data.json();

  let { products } = dataJSON;

  if (!!filters && filters.length > 0) {
    products = products.filter(p =>
      filters.find(f => p.availableSizes.find(size => size === f))
    );
  }

  if (!!sortBy) {
    products = products.sort(compare[sortBy]);
  }

  if (!!callback) {
    callback();
  }

  // return { type: FETCH_PRODUCTS, payload: products };
  return dispatch({ type: FETCH_PRODUCTS, payload: products });
};