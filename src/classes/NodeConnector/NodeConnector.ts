import { Connection } from '../Connection/Connection.js'

export class NodeConnector {
    private fromElement: HTMLElement | undefined
    private toElement: HTMLElement | undefined
    private workspace: HTMLElement
    private connections: Connection[]

    constructor({workspace}: any) {
        this.workspace = workspace
        this.connections = []
    }

    private createConnection({fromElement, toElement}: any) {

        const fromId = fromElement.getAttribute('data-node_id')
        const toId = toElement.getAttribute('data-node_id')

        const connection = new Connection({id:`${fromId}_${toId}`, fromElement, toElement})
        
        connection.initializeDraw(this.workspace)
        connection.draw() 
        this.connections.push(connection)

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
}