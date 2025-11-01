import React, { useState } from 'react';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState(['Sample Todo', 'Another Todo']);
  const [toggle, setToggle] = useState({ 'not done': false });
  const [status, setStatus] = useState(toggle);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addList = () => {
    setList([...list, input]);
    setInput('');
  };
  const deleteList = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  // working on the status and is complete functionality
  const statusCheck = (index) => {
    setStatus((_, i) =>
      i == index ? status == setToggle(toggle == { done: true }) : status
    );
  };
  return (
    <>
      <h1>Todo List</h1>
      <div>
        <input
          type="texts"
          placeholder="add to the list"
          value={input}
          onChange={(e) => handleInput(e)}
        />
        <button onClick={addList}>Add</button>
      </div>
      <div>
        <ol>
          {list.map((list, index) => (
            <li key={index}>
              <span>{list}</span>
              <button onClick={() => deleteList(index)}>Delete</button>
              <button onClick={() => statusCheck(index)}>
                <span>{!toggle ? 'done' : 'not done'}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default TodoList;
