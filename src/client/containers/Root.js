import React from 'react';
import PropTypes from 'prop-types';
import CurrencyWrapper from '../components/CurrencyWrapper.js';
import Footer from '../components/Footer.js';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <CurrencyWrapper />
        <Footer />
      </main>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
