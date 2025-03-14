import React, {useState} from 'react';

function AddTask() {
    // use localStorage to store the tasks

    const [taskInput, setTaskInput] = useState('');
    //JSON.parse() converts the string back to an array
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("myTasks")) || []);

    const handleInputChange = (event) => {
        setTaskInput(event.target.value);
    }

    function handleAddTask (){

        // store the task in localStorage, JSON.stringify() converts the array to a string
        localStorage.setItem("myTasks", JSON.stringify([taskInput, ...taskList]));
        setTaskList(prevTasks=>{
            return [taskInput, ...prevTasks]
        })
    }

    return (
        <section>
            <h2>Add Task</h2>
            <div>
                <input type="text" placeholder="Enter your task" onChange={handleInputChange}/>
                <button onClick={handleAddTask}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-plus" viewBox="0 0 16 16">
                        <title>Add Task</title>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default AddTask;