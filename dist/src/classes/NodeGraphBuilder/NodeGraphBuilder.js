export class NodeGraphBuilder {
    constructor() {
        this.nodes = [];
    }
    addNode(node) {
        this.nodes.push(node);
    }
    getNodes() {
        return this.nodes;
    }
}
