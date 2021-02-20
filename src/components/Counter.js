import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const [changeTime, setChangeTime] = useState(0);

  useEffect(() => {
    // componentDidMount
    props.setCount(1);
    console.log('test 1');
  }, []);

  useEffect(() => {
    // componentDidUpdate
    setChangeTime(changeTime + 1);
    console.log('test 2, changeTime:', changeTime);
  }, [props.count]);

  const countStyle = {
    color: 'purple',
    fontSize: 16,
  };

  return (
    <>
      <h3 className="title">{props.title}</h3>
      <p style={countStyle}>count: {props.count}</p>
      <button
        onClick={() => {
          props.setCount(props.count + 1);
        }}
      >
        +1
      </button>
      <p>setChangeTime 這個函式被改動了 {changeTime} 次!</p>
      <h5 style={{ color: 'red' }}>{changeTime > 8 ? '改動很多次喔' : null}</h5>
      <h5 style={{ color: 'red' }}>{props.count > 10 && 'count 也太多了吧'}</h5>
    </>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
  title: PropTypes.string,
};

export default Counter;
