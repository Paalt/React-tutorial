import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <section>
      <p className="greet">Hello { props.userName }</p>
      <p>Welcome to my { props.userPlace }!</p>
    </section>
  );
};

export default userOutput;
