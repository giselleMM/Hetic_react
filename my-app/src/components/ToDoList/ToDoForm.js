import React, { useState } from 'react';


export default function ToDoForm({ setToDoList }) {
    const[titre, setTitre] = useState();
    const [message, setMessage] = useState();
    const [counter, setCounter] = useState(0);
    const handleChangeTitre = (e) => {
        setTitre(e.currentTarget.value);
    }

    const handleChangeMessage =(e) =>{
        setMessage(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setToDoList(
            previousState => [{titre: titre, message: message, id: counter}, ...previousState]
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="Titre" onChange={handleChangeTitre} placeholder="Titre"/>
            <input type="text" className="Message" onChange={handleChangeMessage} placeholder="Message"/>
            <button type="submit" onClick={() => setCounter(counter + 1)}>Submit</button>
        </form>
    );
};
