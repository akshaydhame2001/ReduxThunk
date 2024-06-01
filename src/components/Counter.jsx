import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAsync, incrementAsync } from "../store/actions";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 style={{ "textAlign": "center" }}>Count: {count}</h1>
      <button onClick={() => dispatch(decrementAsync())}>
        Decrement after 1s
      </button>
      <button onClick={() => dispatch(incrementAsync())}>
        Increment after 1s
      </button>
    </div>
  );
};

export default Counter;
