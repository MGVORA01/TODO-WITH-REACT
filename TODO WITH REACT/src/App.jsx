import { useEffect , useState } from 'react';
import './App.css'
import { Todoprovider } from './context';
import TodoForm from './components/TodoForms';
import TodoItem from './components/TodoItems';

function App() {

  //store the todos in a state
  const [todos , settodos] = useState([
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
  ]);

  //add todo function
//note : in all function first call back for all outervalue and secound callback is for inside the this access the value
  const addTodo = (title) => {
    settodos((oldtodos) => [ {id:Date.now(),...title} ,...oldtodos])
  }

  const updateTodo = (id , title) => {
    settodos((oldtodos) => oldtodos.map((oldvalueintodos) => 
    oldvalueintodos.id === id ? title : oldvalueintodos))
  }

  //hear filter is working in true statment only
  const deleteTodo = (id) => {
    settodos((oldtodos) => oldtodos.filter((oldvalue) => oldvalue.id !== id))
  }

  const toggleTodo = (id) => {
    settodos((prev) => prev.map((prevtodos) => prevtodos.id === id ?  {...prevtodos, completed : !prevtodos.completed} : prevtodos))
  }


  //for local storage we use useeffect
  //getrequest
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if(storedTodos && storedTodos.Length > 0){
      settodos(storedTodos);
    }
  },[])

  //forsetrequest
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  ,[todos])



  return (
    <Todoprovider value={{todos , addTodo , deleteTodo , updateTodo , toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm />
                </div>
                <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo) => (
                    <div key={todo.id}  className='w-full'>
                      <TodoItem todo={todo} />
                    </div>
                  ))}
                </div>
          </div>
      </div>
    </Todoprovider>
  )
}

export default App
