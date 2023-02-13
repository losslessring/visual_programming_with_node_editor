import { NodeBuilder } from "./classes/NodeBuilder/NodeBuilder.js"
import { Connection } from './classes/Connection/Connection.js'
import { NodeConnector } from './classes/NodeConnector/NodeConnector.js'
import { evalNodeGraph } from "./functions/evaluate/evalNodeGraph/evalNodeGraph.js"

const workspace = document.querySelector("#workspace")

const nodeConnector = new NodeConnector({workspace})

const node0 = new NodeBuilder({nodeConnector, id: 0, data: 2, positionX: 90, positionY: 180})
const node1 = new NodeBuilder({nodeConnector, id: 1, data: (x) => x * x, positionX: 350, positionY: 250})
const node2 = new NodeBuilder({nodeConnector, id: 2, data: (x) => x * 100, positionX: 550, positionY: 200})

const rootNode = nodeConnector.getNodes()[0]

document.getElementById(`eval_button`)?.addEventListener("mousedown", () => evalNodeGraph(rootNode, rootNode.getData()))

