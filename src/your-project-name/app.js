// <<<<<<< HEAD
// import { navigateTo, registerRoute } from "../core/router.js";
// import { todoitem } from "./components/TodoItem.js";
// import { newInList } from "./components/Todolist.js";
// registerRoute('/', ()=> {
//     document.getElementById('app').appendChild(todoitem)
//     document.querySelector('.todo-list').appendChild(newInList(0, 'tester mini-framwork'))
// })
// navigateTo('/')
// =======
import { Router } from "../core/router.js";
import HomeComponent from "./components/Home.js";
import TeamComponent from "./components/Team.js";


export const router = new Router

router.registerRoute('/', HomeComponent)
router.registerRoute('/team', TeamComponent)

router.navigateTo('/')
// >>>>>>> e2361b7beac3c6a153778836c28d4ee98776de69
