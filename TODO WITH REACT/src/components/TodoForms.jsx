import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {

    //for inner value managment 
    const [title,settitle] = useState("")

    //in this we can add item so rquired function
    const  { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();

        if( !title ) return;

        addTodo({
            //id: Date.now(), this give in app.js alrady definedd
            title,
            completed: false
        });

        //add todo add somthing then clear the input so that next time input fild seen like empty.
        settitle("");

    }

    

    return (
        <form  onSubmit = {handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={title}
                onChange={(e) => settitle(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

