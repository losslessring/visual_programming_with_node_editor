import { makeElementDraggableByChild } from "../../functions/behaviour/makeElementDraggableByChild/makeElementDraggableByChild.js";
import { generateNodeHtml } from "../../functions/display/generateNodeHtml/generateNodeHtml.js";
import { NodeModel } from "../NodeModel/NodeModel.js";
export class NodeBuilder {
    constructor({ nodeConnector, id, data, positionX = 100, positionY = 200 }) {
        const node = new NodeModel({ id, data });
        nodeConnector.addNode(node);
        const workspace = document.querySelector("#workspace");
        workspace === null || workspace === void 0 ? void 0 : workspace.insertAdjacentHTML('beforeend', generateNodeHtml({ id, positionX, positionY }));
        const nodeContainer = document.getElementById(`node_container_${id}`);
        const nodeTitle = document.getElementById(`node_title_${id}`);
        const onDrag = () => nodeConnector.getConnections().forEach((connection) => connection.update());
        makeElementDraggableByChild({ element: nodeContainer, draggableElement: nodeTitle, onDrag });
        const nodeInput = document.getElementById(`node_input_${id}`);
        const nodeOutput = document.getElementById(`node_output_${id}`);
        nodeOutput === null || nodeOutput === void 0 ? void 0 : nodeOutput.addEventListener("mousedown", (e) => nodeConnector.setOutput(e.target));
        nodeInput === null || nodeInput === void 0 ? void 0 : nodeInput.addEventListener("mouseup", (e) => nodeConnector.setInput(e.target));
    }
}
