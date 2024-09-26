// src/App.js

import './App.css';
import { useState } from 'react';
import { useLocalStorage } from 'react-use';

function App() {

    // Local storage is an object, and every piece of data is assigned to a key on that object.
    // So, we must specify what key that is and what data we use if no key is found in local storage.
    const [storedName, setStoredName] = useLocalStorage("TheName", "");

    // State for the example form component.
    const [name, setName] = useState("");

    // Form functionality.
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    // Update the local storage manually, calling its set function.
    const submitName = (event) => {
        event.preventDefault();
        setStoredName(name);
    }

    return (
        <div className="App">
            <h1>Stored name is: {storedName}</h1>
            <form onSubmit={submitName}>
                <label>Enter a name:</label>
                <input type="text" value={name} onChange={handleNameChange} />
                <button type="submit" >Submit</button>
            </form>

        </div>
    );
}

export default App;