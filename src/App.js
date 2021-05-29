import React, {useState} from "react";
import TodoLists from "./TodoLists";


const App = () => {

  let [inputList, setInputList] = useState("");
  let [items, setItems] = useState([]);

  const itemEvent = (event)=> {
    setInputList(event.target.value);
  }

  // button click
  const listOfItems = () => {
    setItems((oldItems)=> {
       return [...oldItems, inputList];
    });
    setInputList("");
  }

  const deleteItems = (id)=> {
    console.log("deleted");

    setItems((oldItems)=> {
      return oldItems.map((arrayElem, index)=>{
        return index !== id;
      })
    })
  } 

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>Todo List</h1>
          <input type="text" placeholder="Add a items" value={inputList} onChange={itemEvent}/>
          <button onClick={listOfItems}>+</button>
          <ol>
             {
                items.map((itemValue,index)=> {
                  return <TodoLists 
                  text={itemValue}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                  />
                })
              }
          </ol>
        </div>
      </div>
    </>
  )
};

export default App;
