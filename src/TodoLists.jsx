import React from 'react';

const TodoLists = (props)=> {
    return( 
        <>
        <div className="todo_style">
            <li> {props.text} </li>
            <i className="fa fa-times" onClick={()=> {
                props.onSelect(props.id)
            }}></i>
        </div>
        
        </>
    )
}

export default TodoLists;