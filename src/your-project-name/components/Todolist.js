import { createElement } from "../../core/dom.js"

export const newInList = (id, text) => {
    return createElement('li', {
        id:  id.toString()
    }, createElement('div', {
        class: 'view'
    }, createElement('input', {
        class: 'toggle',
        type: 'checkbox'
    }, ), createElement('label', {

    }, text.toString()), createElement('button', {
        class: 'destroy'
    },))).render()
}
