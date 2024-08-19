import { createElement } from "../../core/dom.js"
import { router } from "../app.js"

function HomeComponent() {
    document.getElementById('app').innerHTML = ''
    document.getElementById('app').appendChild(createElement(
        "h1",
        {"id":"welcome"},
        "Welcome to our miniFramework",
        createElement(
            "button",
            {"id":"team"},
            "CHECK TEAM"
        )
    ).render())
    document.getElementById("team").addEventListener('click', ()=>{
        router.navigateTo('/team')
    } )
}

export default HomeComponent