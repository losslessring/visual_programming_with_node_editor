import { NodeBuilder } from "./classes/NodeBuilder/NodeBuilder.js"
import { Connection } from '../dist/src/classes/NodeBuilder/Connection/Connection.js'

const node0 = new NodeBuilder({id: 0, positionX: 90, positionY: 180})
const node1 = new NodeBuilder({id: 1, positionX: 350, positionY: 250})

const workspace = document.querySelector("#workspace")

const fromElement = document.querySelector("#node_output_0")
const toElement = document.querySelector("#node_input_1")

const connection0 = new Connection({id:0, fromElement, toElement})
connection0.initializeDraw(workspace)
connection0.draw() 

workspace?.addEventListener("mousemove", (e) => connection0.update())