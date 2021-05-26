import './App.css';

const App = () => {
    return (
        <div id="content">


        <h1 id="title">Rumble - To do list</h1>
        <div id="box">

            <div id="task">
                <input type="text" placeholder="Add a task..." id="question" required maxlength="50" novalidate />
                <button id="add">+</button>
            </div>

            <div id="category">

                <button id="all" class="hover" autofocus> All</button>

                <button id="todo" class="hover">To-do </button>

                <button id="completed" class="hover">Completed</button>

            </div>



            <ul id="list">
                <li>
                    <label>
                        <input type="checkbox" class="check todo" />
                        Pass interaction design navigation
                    </label>
                    <span class="delete">X</span></li>





            </ul>

        </div>

    </div>
    )
}

export default App;