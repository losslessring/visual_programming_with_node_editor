import { Connection } from '../Connection/Connection.js';
export class NodeConnector {
    constructor({ workspace }) {
        this.workspace = workspace;
        this.connections = [];
    }
    createConnection({ fromElement, toElement }) {
        const id = Math.floor(100000000 + Math.random() * 900000000);
        const connection0 = new Connection({ id, fromElement, toElement });
        connection0.initializeDraw(this.workspace);
        connection0.draw();
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
