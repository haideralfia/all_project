import React, { useState } from 'react';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const [status, setStatus] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addList = () => {
    if (input.trim() === '') return;

    setList([...list, input]);
    setInput('');
    setStatus([...status, false]);
  };
  const deleteList = (index) => {
    const newList = list?.filter((_, i) => i !== index);
    setList(newList);
    const newStatus = status.filter((_, i) => i !== index);
    setStatus(newStatus);
  };

  // working on the status and is complete functionality
  const statusCheck = (index) => {
    const newStatus = status.map((status, i) =>
      i === index ? !status : status
    );
    setStatus(newStatus);
  };
  return (
    <>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="add to the list"
          value={input}
          onChange={(e) => handleInput(e)}
        />
        <button onClick={addList}>Add</button>
      </div>
      <div>
        <ol>
          {list?.map((list, index) => (
            <li key={index}>
              <span>{list}</span>
              <button onClick={() => deleteList(index)}>Delete</button>
              <button onClick={() => statusCheck(index)}>
                <span>{status[index] ? 'done' : 'not done'}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default TodoList;
