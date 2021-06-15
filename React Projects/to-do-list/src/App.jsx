import React,{useState} from 'react' 
import TodoList from './TodoList' 

const App=()=>{
    const [data,setData]=useState("");
    const [items, setItems]=useState([]); //Intialising the state  variable item as an array

    //Handles the input and stores it in the state variable data
    const inputEvent=(event)=>{
        console.log(event.target.value);
        setData(event.target.value);
    }

    //Implementing the addItem functioanlity on clicking the + button
    const onSubmits=()=>{
        setItems((prevValue)=>{
            return [...prevValue ,data]
        })
        setData("")
    }

    //Implementing the delete functonality on clicking the  'Clear' button
    const deleteItems=(id)=>{
        console.log('clicked');

        setItems((prevValue)=>{
            return prevValue.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1 className="heading">ToDo List</h1>
                    <br/>
                    <input 
                        type="text" 
                        placeholder="Add items"  
                        onChange={inputEvent} 
                        value={data}
                    />
                    <button className="add" onClick={onSubmits}> + </button>
                    <br/>
                    <br/>
                    <ul>
                        {items.map((itemval,index)=>{
                        return <TodoList 
                            key={index} 
                            id={index} 
                            val={itemval}
                            onSelect={deleteItems}
                        />})}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App;