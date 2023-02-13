export function evalNodeGraph(node, result) {
    const nodeData = eval(node.getData());
    const nodeChildren = node.getChildren();
    console.log(`Value of current node is ${nodeData}`);
    if (nodeChildren.length === 0) {
        if (typeof nodeData === "function") {
            console.log(`Final value is ${nodeData(result)}`);
            return nodeData(result);
        }
        else {
            return nodeData;
        }
    }
    if (typeof nodeData === "function") {
        const newValue = nodeData(result);
        nodeChildren.forEach((childNode) => evalNodeGraph(childNode, newValue));
    }
    else {
        nodeChildren.forEach((childNode) => evalNodeGraph(childNode, nodeData));
    }
}
