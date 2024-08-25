import { todoitem } from "./components/TodoItem.js";
import { Router } from "../core/router.js";
import { newInList } from "./components/Todolist.js";
import { StateManager } from "../core/state.js";

const router = new Router

router.registerRoute('#/', getThisPage)
router.registerRoute('#/active', getThisPage)
router.registerRoute('#/completed', getThisPage)

document.getElementById('app').appendChild(todoitem)

const main = document.querySelector('main')
const footer = document.querySelector('footer')
const input = document.getElementById("todo-input");
const todoList = document.querySelector(".todo-list");
const Count = document.querySelector('.todo-count');

const stateManager = StateManager();

stateManager.setState({ tasks: [], n: 0 });

let last = 0;

function handleSubmit() {
  const value = input.value.trim();
  if (value !== "") {

    if (window.location.hash !== "#/completed") {
      const newTask = { Id: last.toString(), Content: value, Completed: false };
      addTask(newTask);
      todoList.insertBefore(newInList(newTask), todoList.children[0])
      last++
    }
      
    input.value = "";


    main.style.display = "block";
    footer.style.display = "block";
  }
}

function updateCounterTasks() {
  Count.textContent = getCounter() + (getCounter() <= 1 ? ' item left' : ' items left');
}

function addTask(task) {
  const currentState = getTasks();
  const updatedTasks = [...currentState, task];
  stateManager.setState({ tasks: updatedTasks, n: getCounter() + 1 });
  updateClearCompletedButton()
  updateCounterTasks()
}


input.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        handleSubmit()
    }
})

function getThisPage() {
    const currentURL = window.location.hash;
    console.log(currentURL)
    loadTask(currentURL);
}

function getTasks() {
    const currentState = stateManager.getState();
    return currentState.tasks;
  }

function loadTask(url) {
    let tasks = getTasks();

    // Filtrer les tâches en fonction de l'URL
    switch (url) {
      case "#/active":
        tasks = tasks.filter(task => !task.Completed);
        break;
      case "#/completed":
        tasks = tasks.filter(task => task.Completed);
        break;
    }
    const links = document.querySelectorAll('a');

    links.forEach(link => {
      link.classList.remove('selected');
    });


    const currentLink = document.querySelector(`a[href="${url}"]`);
    if (currentLink) {
      currentLink.classList.add('selected');
    }

    todoList.innerHTML = "";

    tasks.forEach(task => {
      // const taskels = newInList(task);
      todoList.insertBefore(newInList(task), todoList.children[0])
    });

    updateClearCompletedButton();
  }

  function updateClearCompletedButton() {
    const clearCompletedButton = document.querySelector('.clear-completed');
    const anyCompleted = getTasks().some(task => task.Completed);

    if (anyCompleted) {
      clearCompletedButton.style.display = 'block';
      clearCompletedButton.textContent = 'Clear Completed';
    } else {
      clearCompletedButton.style.display = 'none';
    }
  }


  function getCounter() {
    const currentState = stateManager.getState();
    return currentState.n;
  }
  
  function updateTodoList() {
    todoList.innerHTML = "";

    const tasks = getTasks();
    if (tasks.length === 0) {
      if (window.location.hash != '#/completed') {
        main.style.display = "none";
        footer.style.display = "none";
      }
    } else {
      main.style.display = "block";
      footer.style.display = "block";
      tasks.forEach(task => {
        // const taskels = newInList(task);
        todoList.insertBefore(newInList(task), todoList.children[0])
      });
    }
    getThisPage()
  }

  function setTask(taskId) {
    const currentState = getTasks();
    const updatedTasks = currentState.map(task => {
      if (task.Id === taskId) {
        if (!task.Completed) {
          stateManager.setState({ n: getCounter() - 1 })
        } else {
          stateManager.setState({ n: getCounter() + 1 })
        }
        task.Completed = !task.Completed;
      }
      return task;
    });
    stateManager.setState({ tasks: updatedTasks });
    updateTodoList();
    updateClearCompletedButton()
    updateCounterTasks()
  }

  function handleDestroyClick(event) {
    const destroyButton = event.target;
    const listItem = destroyButton.closest("li");
    const taskId = listItem.getAttribute("data-id");

    // Vérifier si le clic provient réellement du bouton de suppression
    if (destroyButton.classList.contains("destroy")) {
      const tasks = getTasks();
      const updatedTasks = tasks.filter(task => task.Id !== taskId);
      stateManager.setState({ tasks: updatedTasks, n: getCounter() - 1 });
      listItem.remove();
    }
    setTask(taskId)
    updateClearCompletedButton()
  }

todoList.addEventListener('click', handleDestroyClick)

function handleClearCompletedClick() {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(task => !task.Completed);
  stateManager.setState({ tasks: updatedTasks });
  updateTodoList();
  updateClearCompletedButton()
}
const clear = document.querySelector('.footer .clear-completed')
clear.addEventListener('click', handleClearCompletedClick)