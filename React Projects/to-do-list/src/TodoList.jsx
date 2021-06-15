import React from 'react'  
 
const TodoList=(props)=>{

    

    return (
        <>
        <div>
            <li className="list">{props.val}<span><button className="del" 
            onClick={()=>{
                props.onSelect(props.id);
            }}>Clear</button></span> </li>
        </div>
        </>
    )
}

export default TodoList;