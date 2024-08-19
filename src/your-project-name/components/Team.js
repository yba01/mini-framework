import { createElement } from "../../core/dom.js"
import { router } from "../app.js"

function TeamComponent() {
    document.getElementById('app').innerHTML = ''
    document.getElementById('app').appendChild(createElement(
        "h1",
        {"id":"theTeam"},
        "The Team is: BArry, YeroBA, IssaFaye, Adiane",
        createElement(
            "button",
            {"id":"home"},
            "return Home"
        )
    ).render())
    document.getElementById("home").addEventListener('click', ()=>{
        router.navigateTo('/')
    })
}

export default TeamComponent