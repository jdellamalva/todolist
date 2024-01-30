// Define a functional component called App
function App(){
    
    // Use the useState hook to create a state variable for todos and a function to update it
    // Initialize the todos state with an array of todo objects
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false,
        },
        {
            text: 'figure out how to integrate figma designs into react',
            isCompleted: false,
        },
        {
            text: 'build todo app',
            isCompleted: false,
        },
        {
            text: 'conquer the world',
            isCompleted: false,
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text: text, isCompleted: false}]; // Create a new array with the existing todos and the new todo
        setTodos(newTodos); // Update the todos state with the new array
    }

    // Define a function to handle removing a todo
    // This function is called when a todo div is clicked
    const removeTodo = index => {
        let temp = [...todos]; // Create a copy of the todos array
        temp.splice(index, 1); // Remove the clicked todo from the array
        setTodos(temp); // Update the todos state with the new array
    }

    // Render the component
    return (
        <div className="app">
            <div className="todo-list">
                <TodoForm addTodo={addTodo}/>  
                {todos.map((todo, index) => 
                    <Todo key={index} index={index} todo={todo} remove={removeTodo}/>
                )}            
            </div>
        </div>
    );
}

// Render the App component into the div with the id of 'root'
ReactDOM.render(
    <App />,
    document.getElementById('root')
)