import React, { Component } from 'react'
import './ListItems.css'

class ListItems extends Component{
    constructor(){
        super()
        this.state={
            showToDoList: true,
            listItemsArray : []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(response => response.json())
        .then(json => console.log(json))
        .then(itemsList => this.setState({listItemsArray: itemsList}))
        .then(itemsList => this.generateList(itemsList))

    }

    onListClick = (index, item) => {
        const newValues = [...this.state.listItemsArray]
        newValues[index].value = item
        this.setState({listItemsArray: newValues})

    }

    generateList(){
        for (const element in this.state.listItemsArray){
            this.createListItem(element)
        }
    }

    createListItem(element){
        const list = document.getElementById("List")
        let listItem = document.createElement("li")
            listItem.innerText = this.state.listItemsArray[element].completed
            listItem.className = "listItem"
            list.appendChild(listItem)

            listItem.addEventListener("click", () =>{
                if (!this.state.listItemsArray[element].completed){
                    listItem.style.transform = "scale(1.2)"
                    console.log("activated")
                } else {
                    listItem.style.transform = "scale(1)"
                    console.log("deactivated")
                }
                let newStateValue = !this.state.listItemsArray[element].completed
                this.onListClick(element, newStateValue)
            })
    }

    render(){
        return(
                <ul className="toDoList-content" id="List"></ul>
        )
}}

export default ListItems