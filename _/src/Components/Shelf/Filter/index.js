import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { updateFilters } from '../../../Services/filters/actions';
import Checkbox from '../../Checkbox';
import GithubStarButton from '../../github/StarButton';

import './style.scss';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

Filter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filters: PropTypes.array
};


const Filter = (props) => {

  const [selectedCheckboxes, setSelectedCheckboxes] = useState(null);

  useEffect(
    () => {
      const set = new Set();
      setSelectedCheckboxes(set);
    }, []
  )


  const toggleCheckbox = label => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    // TODO: we can make this work now however less work if we wait
    // for once we have added useReducer hooks 
    //props.updateFilters(Array.from(selectedCheckboxes));
  };

  const createCheckbox = label => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={toggleCheckbox}
      key={label}
    />
  );

  const createCheckboxes = () => availableSizes.map(createCheckbox);

  return (
    <div className="filters">
      <h4 className="title">Sizes:</h4>
      {createCheckboxes()}
      <GithubStarButton />
    </div>
  );
}

export default Filter