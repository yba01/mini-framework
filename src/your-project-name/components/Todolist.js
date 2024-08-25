import { createElement } from "../../core/dom.js"

export const newInList = (task) => {
    if (task.Completed) {
        return createElement('li', {
            'data-id':  task.Id,
            class: 'completed'
        }, createElement('div', {
            class: 'view'
        }, createElement('input', {
            class: 'toggle',
            type: 'checkbox',
            checked: 'checked'
        }, ), createElement('label', {
    
        }, task.Content), createElement('button', {
            class: 'destroy'
        },))).render()
    }else {
        return createElement('li', {
            'data-id':  task.Id
        }, createElement('div', {
            class: 'view'
        }, createElement('input', {
            class: 'toggle',
            type: 'checkbox'
        }, ), createElement('label', {
    
        }, task.Content), createElement('button', {
            class: 'destroy'
        },))).render()
    }
}
