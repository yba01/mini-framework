import { createElement } from "../../core/dom.js"

function HomeComponent() {
    document.getElementById('app').appendChild(createElement(
        "h1",
        {"id":"welcome"},
        "Welcome to our miniFramework"
    ).render())
}

export default HomeComponent