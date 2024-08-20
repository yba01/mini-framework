import { navigateTo, registerRoute } from "../core/router.js";
import { todoitem } from "./components/TodoItem.js";
import { newInList } from "./components/Todolist.js";
registerRoute('/', ()=> {
    document.getElementById('app').appendChild(todoitem)
    document.querySelector('.todo-list').appendChild(newInList(0, 'tester mini-framwork'))
})
navigateTo('/')
