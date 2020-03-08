import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Store } from '../../../Store/store';
import { updateSort } from '../../../Services/sort/actions';
import Selectbox from '../../Selectbox';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' }
];

const Sort = ({ sort }) => {

  const { dispatch } = useContext(Store)

  return (
    <div className="sort">
      Order by
      <Selectbox options={sortBy} handleOnChange={value => dispatch(updateSort(value))} />
    </div>
  );

}

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  sort: state.sort.type
});

export default Sort;
