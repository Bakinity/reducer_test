import React, { useReducer } from "react";
import "./style.css";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: true,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE": {
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    }
    case "ADD": {
      return [
        ...state,
        { ...action.data, complete: true, id: state.length + 1 },
      ];
    }

    case "REMOVE": {
      return state.filter((v, i) => i !== action.index);
    }

    default:
      return state;
  }
};

const Index = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const completeChanger = (value) => {
    dispatch({ type: "COMPLETE", id: value.id });
  };

  const addInputHandler = (e) => {
    const { keyCode, target } = e;

    if (keyCode === 13) {
      dispatch({ type: "ADD", data: { title: target.value } });
      target.value = "";
    }
  };

  const deleteInputHandler = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  return (
    <div className='TestReduser'>
      <input placeholder='Add Todo' onKeyDown={addInputHandler} />
      <ol className='TestReducer'>
        {todos.map((value, index) => (
          <li key={index} className={!value.complete ? "li" : ""}>
            <label>
              <input
                type='checkbox'
                checked={!value.complete}
                onChange={() => completeChanger(value)}
              ></input>
              {value.title}
              &nbsp;
              <button onClick={() => deleteInputHandler(index)}>Delete</button>
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Index;
