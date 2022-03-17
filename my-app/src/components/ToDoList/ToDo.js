import React from 'react';

function ToDo({titre, message,handleSuccess, handleDelete, id}){
    return (
        <div id={id} className="task">
            <h1>{titre}</h1>
            <p>{message}</p>
            <div>
                <button className="success" onClick={() => handleSuccess(id)}>Success</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    );
};

export default ToDo;