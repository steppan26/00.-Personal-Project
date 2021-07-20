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
                    3 > 1 ?
                    (
                        <div>No items are on your list</div>
                    )
                    :(
                        <ListItems />
                    )
                }
            </div>
        )
    }

export default ToDoList