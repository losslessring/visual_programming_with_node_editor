import { makeElementDraggableByChild } from "../../functions/behaviour/makeElementDraggableByChild/makeElementDraggableByChild.js";
import { generateNodeHtml } from "../../functions/display/generateNodeHtml/generateNodeHtml.js";
export class NodeBuilder {
    constructor({ id, positionX = 100, positionY = 200 }) {
        const workspace = document.querySelector("#workspace");
        workspace === null || workspace === void 0 ? void 0 : workspace.insertAdjacentHTML('beforeend', generateNodeHtml({ id, positionX, positionY }));
        const nodeContainer = document.getElementById(`node_container_${id}`);
        const nodeTitle = document.getElementById(`node_title_${id}`);
        makeElementDraggableByChild(nodeContainer, nodeTitle);
    }
}
