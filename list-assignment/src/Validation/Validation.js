import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text long enough';

  if (props.strLength < 5) {
    validationMessage = 'Text too short';
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  )
}

// {
//   props.strLength < 5 ?
//     <p>Text to short</p> :
//     <p>Text long enough</p>
// }

export default validation;
