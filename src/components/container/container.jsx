import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        margin: '0 auto',
        backgroundColor: '#f0f8ff',
      }}
    >
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
