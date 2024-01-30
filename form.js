function TodoForm({addTodo}){
    // Use the useState hook to create a state variable for the input value and a function to update it
    // Initialize the value state with an empty string
    const [value, setValue] = React.useState('');

    // Define a function to handle form submission
    const handleSubmit = e => {
        e.preventDefault(); // Prevent the form from refreshing the page
        if(!value) return; // If the input is empty, don't do anything
        addTodo(value);
        setValue(''); // Clear the input
    }

    return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            className="input"
            value={value}
            placeholder="Add Todo..."
            onChange={e => setValue(e.target.value)} // When the input changes, update the value state
        ></input>
    </form>
    );
}


