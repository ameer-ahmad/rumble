import './App.css';
import React, {useState} from "react";

const App = () => {

    // State for task
    const [task, setTask] = useState("");

    const addTask = () => {
        let li = document.createElement('li');
        li.innerHTML = `<label><input type='checkbox' class='check todo'>&nbsp; ${task} </label> <span class='delete'>X</span>`;
        if (task !== "") {
            document.getElementById('list').appendChild(li);
            setTask("");
        }
    }

    const listHandler = () => {
        let checked = document.querySelectorAll('.check');
        let deleteItem = document.querySelectorAll('.delete');

        for (var i = 0; i < checked.length; i++) {
            checked[i].onclick = function() {
                if (this.checked === true) {
                    this.parentElement.style.textDecoration = 'line-through';
                    this.parentElement.style.color = '#606368';
                    this.classList.remove('todo');
                    this.classList.add('completed');
                } else {
                    this.parentElement.style.textDecoration = 'none';
                    this.parentElement.style.color = '#A1A1A1';
                    this.classList.remove('completed');
                    this.classList.add('todo');
                }
            }
        }

        for (var i = 0; i < deleteItem.length; i++) {
            deleteItem[i].onclick = function() {
              this.parentElement.parentElement.removeChild(this.parentElement);
            }
          }
    }

    const displayAll = () => {
        let listItems = document.querySelectorAll('.check');

        for (var i = 0; i < listItems.length; i++) {
            if (listItems[i].classList.contains('todo') || listItems[i].classList.contains('completed')) {
                listItems[i].parentElement.parentElement.style.display = 'block';
            }
        }
    }

    const displayTodo = () => {
        let listItems = document.querySelectorAll('.check');

        for (var i = 0; i < listItems.length; i++) {
            if (listItems[i].classList.contains('todo')) {
                listItems[i].parentElement.parentElement.style.display = 'block';
            } else {
                listItems[i].parentElement.parentElement.style.display = 'none';
            }
        }
    }


    return (
        <div id="content">

        <h1 id="title">Rumble - To do list</h1>
        <div id="box">

            <div id="task">
                <input type="text" placeholder="Add a task..." id="question" required maxLength="50" noValidate value={task} onChange={(e) => {setTask(e.target.value)}} />
                <button id="add" onClick={addTask}>+</button>
            </div>

            <div id="category">

                <button id="all" className="hover" autoFocus={true} onClick={displayAll}> All</button>

                <button id="todo" className="hover" onClick={displayTodo}>To-do </button>

                <button id="completed" className="hover">Completed</button>

            </div>



            <ul id="list" onClick={listHandler}>

            </ul>

        </div>

    </div>
    )
}

export default App;