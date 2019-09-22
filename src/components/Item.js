import React from 'react';

const Item = props => {
  return (
    <div className="item-container">
      <li className={`Item${props.isCompleted ? " completed" : ""}`}
        onClick={() => props.completeItem(props.index)}>
        {props.content}
      </li>
      <button className="item__button-reset" onClick={() => props.deleteItem(props.index)}>X</button>
    </div>

  )
};

export default Item;
