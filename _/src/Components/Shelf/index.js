import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchProducts } from '../../Services/shelf/actions';

import Spinner from '../Spinner';
import ShelfHeader from './ShelfHeader';
import ProductList from './ProductList';

import './style.scss';

const Shelf = (props) => {

  const [isLoading, setIsLoading] = useState(false);

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

  const handleFetchProducts = (filters = props.filters, sort = props.sort) => {
    setIsLoading(true);

    // TODO: wait for #useDispatch
    // props.fetchProducts(filters, sort, () => {
    //   setState({ isLoading: false });
    // });
  };

  const { products } = props;

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



const mapStateToProps = state => ({
  products: state.shelf.products,
  filters: state.filters.items,
  sort: state.sort.type
});

export default Shelf
