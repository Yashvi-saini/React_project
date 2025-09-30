import React from 'react';
const Todoitem =(props)=>{
    return (<li className="listitem">
      <input type="checkbox" />
      <p>{props.status}</p>
      <p>...</p>
      </li>
    );
};
export default Todoitem;