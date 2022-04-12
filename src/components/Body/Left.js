import React from 'react';
import "./Left.css";
const Left = () => {
    return (
      <div className="left-content">
        <p>
          Multipz Technology is a multi-service company with a focus to provide
          innovativeand value-based services. We have been helping businesses
          through our web development, artificial intelligence, custom
          development, and mobile app development services. Our core competency
          lies in providing in-house and offshore solutions.
        </p>
        <div className="left-content-role">
        <div className="mt-5">
          <h3>Office</h3>
          <h3>India</h3>
          <p>415, 4th Floor,</p>
          <p>Maruti Plaza, Krishnanagar,</p>
          <p>Ahmedabad - 382346,</p>
          <p>India</p>
        </div>
        <div className="mt-5">
          <h3>United Kingdom</h3>
          <p>
            Multipz Technology Limited Flat 6 Farmstead Court 6 Melbourne Road
            Wallington SM6 8SY
          </p>
        </div>
        </div>
      </div>
    );
};

export default Left;