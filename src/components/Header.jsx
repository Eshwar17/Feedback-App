import React from 'react';
import PropTypes from 'prop-types'

function Header({ text }) {
  return (
    <header>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback Prop',
};
Header.prototype = {
    text: PropTypes.string,
}
export default Header;
