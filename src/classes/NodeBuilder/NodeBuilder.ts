import { makeElementDraggableByChild } from "../../functions/behaviour/makeElementDraggableByChild/makeElementDraggableByChild.js"
import { generateNodeHtml } from "../../functions/display/generateNodeHtml/generateNodeHtml.js"

export class NodeBuilder {
    constructor({nodeConnector, id, positionX = 100, positionY = 200}: any) {
        const workspace = document.querySelector("#workspace")


        workspace?.insertAdjacentHTML('beforeend', generateNodeHtml({id, positionX, positionY}))

        const nodeContainer = document.getElementById(`node_container_${id}`)
        const nodeTitle = document.getElementById(`node_title_${id}`)

        makeElementDraggableByChild(nodeContainer, nodeTitle)

        const nodeInput = document.getElementById(`node_input_${id}`)
        const nodeOutput = document.getElementById(`node_output_${id}`)

        nodeOutput?.addEventListener("mousedown", (e) => nodeConnector.setOutput(e.target))
        nodeInput?.addEventListener("mouseup", (e) => nodeConnector.setInput(e.target))
    }
}