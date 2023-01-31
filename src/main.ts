import { makeElementDraggableByChild } from "./functions/behaviour/makeElementDraggableByChild/makeElementDraggableByChild.js"
import { generateNodeHtml } from "./functions/display/generateNodeHtml/generateNodeHtml.js"


const workspace = document.querySelector("#workspace")


workspace?.insertAdjacentHTML('beforeend', generateNodeHtml())

const nodeContainer = document.getElementById(`node_container`)
const nodeTitle = document.getElementById(`node_title`)

makeElementDraggableByChild(nodeContainer, nodeTitle)
