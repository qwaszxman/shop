import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { Store } from '../../Store/store';

import { fetchProducts } from '../../Services/shelf/actions';

import Spinner from '../Spinner';
import ShelfHeader from './ShelfHeader';
import ProductList from './ProductList';

import './style.scss';

const Shelf = (props) => {

  const { state, dispatch } = useContext(Store)
  const [isLoading, setIsLoading] = useState(false);

  const { shelf, sort, filters } = state;
  const { products } = shelf;

  useEffect(
    () => {
      handleFetchProducts()
    }, []
  )

  // TODO: we will revist this and refactor after #useReducer
  const componentWillReceiveProps = (nextProps) => {
    const { filters: nextFilters, sort: nextSort } = nextProps;
    const { filters } = props;
    if (nextFilters.length !== filters.length) {
      handleFetchProducts(nextFilters, undefined);
    }

    if (nextSort !== props.sort) {
      handleFetchProducts(undefined, nextSort);
    }
  }

  const handleFetchProducts = (filters, sort) => {
    setIsLoading(true);

    dispatch(fetchProducts(filters, sort, () => {
      setIsLoading(false);
    }));
  };

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      <div className="shelf-container">
        <ShelfHeader productsLength={products.length} />
        <ProductList products={products} />
      </div>
    </React.Fragment>
  );
}

Shelf.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  filters: PropTypes.array,
  sort: PropTypes.string
};

export default Shelf
