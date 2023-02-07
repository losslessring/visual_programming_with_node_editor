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

        const id = Math.floor(100000000 + Math.random() * 900000000)

        const connection = new Connection({id, fromElement, toElement})
        
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