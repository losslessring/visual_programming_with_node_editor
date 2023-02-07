import { Connection } from '../Connection/Connection.js';
export class NodeConnector {
    constructor({ workspace }) {
        this.workspace = workspace;
        this.connections = [];
    }
    createConnection({ fromElement, toElement }) {
        const id = Math.floor(100000000 + Math.random() * 900000000);
        const connection = new Connection({ id, fromElement, toElement });
        connection.initializeDraw(this.workspace);
        connection.draw();
        this.connections.push(connection);
    }
    getConnections() {
        return this.connections;
    }
    setInput(toElement) {
        if (this.fromElement) {
            this.createConnection({ fromElement: this.fromElement, toElement });
        }
    }
    setOutput(fromElement) {
        this.fromElement = fromElement;
    }
}
