import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';

const App = () => {
  const [count, setCount] = useState(0);
  const [formDone, setFormDone] = useState(false);

  return (
    <div className="App">
      <Counter count={count} setCount={setCount} title="Counter App" />
      <Form setFormDone={setFormDone} />
      <p>{formDone ? '表單填答完成' : '請填寫表單'}</p>
    </div>
  );
};

export default App;
