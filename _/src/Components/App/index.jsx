import React from 'react';

import Shelf from '../Shelf';
import { Header } from "./header";
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';

const App = (props) => (
  <React.Fragment>

    <Header />
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
