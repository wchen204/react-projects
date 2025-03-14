import './App.css'
import Header from "./components/Header.jsx";
import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";
import CompletedTasks from "./components/CompletedTasks.jsx";

function App() {

    return (
        <>
            <Header/>

            <main>
                <AddTask/>
                <Tasks/>
                <CompletedTasks/>
            </main>
        </>
    )
}

export default App
