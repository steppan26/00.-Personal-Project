import React from 'react'
import './ToDoList.css'
import ListItems from '../Components/ListItems'


const ToDoList = () => {
    // const [item, activateItem ] = useState(true)
    //     const listItemStyle = useSpring({
    //         colour: item ? "black" : "white",
    //         backgroundColor: item ? "#fff" : "black",
    //         flexDirection: item ? "column" : "column",
    //     })

    //Check if any list items exist and return true or false
    const isEmpty = () => {
        if (document.getElementsByClassName("listItem").length < 1){
            return false
        } else {
            return true
        }
    }

        return(
            <div className="toDoList-wrapper">
                <div className="toDoList-header">
                    <h3 className="toDoList-title">To Do List</h3>
                </div>
                <div className="useInput-section">
                    <input type="text" id="userListInput" />
                    <button className="listItem-SubmitButton" >SUBMIT ITEM</button>
                </div>
                {
                    isEmpty() ?
                    (
                        <div>No items are on your list</div>
                    )
                    :(
                        <ListItems listLength={isEmpty}/>
                    )
                }
            </div>
        )
    }

export default ToDoList