import { createElement } from "../core/dom.js";
import { navigateTo, registerRoute } from "../core/router.js";

registerRoute('/', ()=> {
    document.getElementById('app').appendChild(createElement('p', {"id":"HomePrint"}, "hello").render())
})

navigateTo('/')