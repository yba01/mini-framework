import { createElement } from "../../core/dom.js"

export const todoitem = createElement('section', {
    class: 'todoapp'
}, createElement('header', {
    class: 'header'
}, createElement('h1', {}, 'todos'), createElement('input', {
    class: 'new-todo',
    id: 'todo-input',
    placeholder: 'What needs to be done?',
    autofocus: ''
},)), createElement('main', {
    class: 'main',
    style: 'display: none'
}, createElement('div', {
    class: 'toggle-all-container'
}, createElement('input', {
    class: 'toggle-all',
    type: 'checkbox'
}, ), createElement('label', {
    class: 'toggle-all-label',
    for: 'toggle-all'
}, 'Mark all as complete')), createElement('ul', {
    class: 'todo-list'
}, )),createElement('footer', {
    class: 'footer',
    style: 'display: none' 
}, createElement('span', {
    class: 'todo-count'
}, '0 item left'), createElement('ul', {
    class: 'filters'
}, createElement('li',{

},createElement('a',{
    href: '#/', 
    class: 'selected'
}, 'All')), createElement('li',{
    
},createElement('a',{
    href: '#/active', 
}, 'Active')), createElement('li',{
    
},createElement('a',{
    href: '#/completed', 
}, 'Completed'))), createElement('button', {
    class: 'clear-completed', 
    style: 'display: none'
},))).render()
