import React, { useState } from 'react';

const Todo= () =>{
    const [tareas, setTarea] = useState(["Comer","Dormir","Estudiar","Trabajar"]);
    const deleteTarea = (i)=> {
        setTarea(tareas.filter((value, index) => {return index !=i}))
    }
    return (
        <div className="text-center">
            <h1>Todo List</h1>
            <input placeholder="Escribir tarea" onKeyPress={(event)=>{
                if(event.key == "Enter"){
                    setTarea([...tareas, event.target.value]);
                        event.target.value="";
                }
            }}/>
             
            {tareas.map((value, index, i)=>{
            return <div className='task-container d-flex'>
                        <div className='task-name'>{value}</div> 
                        <div className='button-container'><button className='delete-button' onClick={()=> deleteTarea(index)}>X</button></div>
                   </div>
            })}     
             
        </div>
    )
}

export default Todo;