import { Connection } from '../Connection/Connection.js';
export class NodeConnector {
    constructor({ workspace }) {
        this.workspace = workspace;
        this.connections = [];
    }
    createConnection({ fromElement, toElement }) {
        const fromId = fromElement.getAttribute('data-node_id');
        const toId = toElement.getAttribute('data-node_id');
        const connection = new Connection({ id: `${fromId}_${toId}`, fromElement, toElement });
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
