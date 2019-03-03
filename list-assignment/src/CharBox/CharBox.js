import React from 'react';
import './CharBox.css';

const charBox = (props) => {

  return (
    <div
      className="Char-component"
      onClick={props.click}>
      <p>{props.char}</p>
    </div>
  )
}

export default charBox;
