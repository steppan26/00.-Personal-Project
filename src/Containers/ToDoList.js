import React, { Component } from 'react'
import './ToDoList.css'


class ToDoList extends Component {
    constructor(){
        super()
        this.state={
            showToDoList: true,
            listItemsArray : [{content: "item1", value: false},{content: "item2", value: false},{content: "item3", value: false}, {content: "item4", value: false}]
        }
    }

    componentDidMount(){
        this.generateList()

    }

    onListClick = (index, item) => {
        const newValues = [...this.state.listItemsArray]
        newValues[index].value = item
        this.setState({listItemsArray: newValues})

    }

    generateList(){
        const list = document.getElementById("List")
        for (const element in this.state.listItemsArray){
            let listItem = document.createElement("li")
            listItem.innerText = this.state.listItemsArray[element].content
            list.appendChild(listItem)

            listItem.addEventListener("click", () =>{
                if (!this.state.listItemsArray[element].value){
                    listItem.style.transform = "scale(1.2)"
                } else {
                    listItem.style.transform = "scale(1)"
                }
                let newStateValue = !this.state.listItemsArray[element].value
                this.onListClick(element, newStateValue)
            })
        }
    }

    render(){

        return(
            <div className="toDoList-wrapper">
                <div className="toDoList-header">
                    <h3 className="toDoList-title">To Do List</h3>
                </div>
                <ul className="toDoList-content" id="List">

                </ul>
            </div>
        )
    }
}

export default ToDoList