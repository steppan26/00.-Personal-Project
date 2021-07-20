import React, { Component } from 'react'
import './ListItems.css'
import todos from '../Data/todos.jsx'

class ListItems extends Component{
    constructor(){
        super()
        this.state={
            showToDoList: true,
            listItemsArray : []
        }
    }

    componentDidMount(){
        this.generateList()

    }

    generateList(){  //fetch the placeholder items from json REST API
        this.setState({listItemsArray: todos})
        for (const key in todos){
            this.createListItem(key)
        }

    }

    createListItem(element){
        const list = document.getElementById("List")
        let listItem = document.createElement("li")
            listItem.innerText = todos[element].title
            listItem.className = "listItem"
            list.appendChild(listItem)

            listItem.addEventListener("click", (event) =>{
                if (todos[element].completed){
                    listItem.style.transform = "scale(1.2)"
                    console.log("activated")
                } else {
                    listItem.style.transform = "scale(1)"
                    console.log("deactivated")
                }
                todos[element].completed = !todos[element].completed
            })
    }

    render(){
        return(
                <ul className="toDoList-content" id="List"></ul>
        )
}}

export default ListItems