import React from 'react';
import Left from './Left.js';
import Right from './Right.js';

const Body = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-md-4 col-lg-4">
            <Left />
          </div>
          <div className="col col-md-8 col-lg-8">
            <Right />
          </div>
        </div>
      </div>
    );
};

export default Body;