import { Connection } from '../Connection/Connection.js';
export class NodeConnector {
    constructor({ workspace }) {
        this.workspace = workspace;
        this.connections = [];
        this.nodes = [];
    }
    createConnection({ fromElement, toElement }) {
        const fromId = fromElement.getAttribute('data-node_id');
        const toId = toElement.getAttribute('data-node_id');
        const connection = new Connection({ id: `${fromId}_${toId}`, fromElement, toElement });
        connection.initializeDraw(this.workspace);
        connection.draw();
        this.connections.push(connection);
        const childNode = this.nodes.find((node) => node.getId() === Number(toId));
        const parentNode = this.nodes.find((node) => node.getId() === Number(fromId));
        if (childNode && parentNode) {
            parentNode.addChild(childNode);
        }
        console.log(parentNode);
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
    addNode(node) {
        this.nodes.push(node);
    }
    setNodeChild(id, childNodeId) {
        //this.nodes.find((node: NodeModel) => node.getId() === childNodeId)
    }
}
