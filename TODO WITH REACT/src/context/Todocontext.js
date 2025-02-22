import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //hear pass variable and function
    todos: [{ id: 1, title: "Todo 1", completed: false }, { id: 2, title: "Todo 2", completed: true }],
    //functions with requried perameter
    addTodo: (title) => {},
    deleteTodo: (id) => {},
    updateTodo: (id,title) => {},
    toggleTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider;