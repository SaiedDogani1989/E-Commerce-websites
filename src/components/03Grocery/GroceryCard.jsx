import React, { useState, useReducer } from 'react';


const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    default:
      return initialState
  }
}

const GroceryCard = (props) => {


  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="card col-lg-3" style={{ "width": "18rem" }}>
      <img
        src={props.img}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">{props.price}</p>
        <button
          disabled={(count === 0) ? true : false}
          className="btn btn-danger m-2" onClick={() => dispatch("decrement")}>-</button>
        <span>{count}</span>
        <button className="btn btn-primary m-2" onClick={() => dispatch("increment")} >+</button>

        <a href="#" className="btn btn-outline-dark m-1">Add to card</a>
      </div>
    </div>
  );
}

export default GroceryCard;
