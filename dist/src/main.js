import { NodeBuilder } from "./classes/NodeBuilder/NodeBuilder.js";
import { NodeConnector } from './classes/NodeConnector/NodeConnector.js';
const workspace = document.querySelector("#workspace");
const nodeConnector = new NodeConnector({ workspace });
const node0 = new NodeBuilder({ nodeConnector, id: 0, positionX: 90, positionY: 180 });
const node1 = new NodeBuilder({ nodeConnector, id: 1, positionX: 350, positionY: 250 });
const node2 = new NodeBuilder({ nodeConnector, id: 2, positionX: 550, positionY: 200 });
