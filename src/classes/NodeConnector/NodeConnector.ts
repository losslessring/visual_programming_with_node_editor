import { Connection } from '../Connection/Connection.js'
import { NodeModel } from '../NodeModel/NodeModel.js'

export class NodeConnector {
    private fromElement: HTMLElement | undefined
    private toElement: HTMLElement | undefined
    private workspace: HTMLElement
    private connections: Connection[]
    private nodes: NodeModel[]

    constructor({workspace}: any) {
        this.workspace = workspace
        this.connections = []
        this.nodes = []
    }

    private createConnection({fromElement, toElement}: any) {

        const fromId = fromElement.getAttribute('data-node_id')
        const toId = toElement.getAttribute('data-node_id')

        const connection = new Connection({id:`${fromId}_${toId}`, fromElement, toElement})
        
        connection.initializeDraw(this.workspace)
        connection.draw() 
        this.connections.push(connection)

        const childNode = this.nodes.find((node: NodeModel) => node.getId() === Number(toId))
        const parentNode = this.nodes.find((node: NodeModel) => node.getId() === Number(fromId))

        if (childNode && parentNode) {
            parentNode.addChild(childNode)
        }
        console.log(parentNode)

    }

    getConnections() {
        return this.connections
    }

    setInput(toElement: HTMLElement) {
        if(this.fromElement) {
            this.createConnection({fromElement: this.fromElement, toElement})
        }
    }

    setOutput(fromElement: HTMLElement) {
        this.fromElement = fromElement
    }

    addNode(node: NodeModel){
        this.nodes.push(node)
    }

    getNodes() {
        return this.nodes
    }
}