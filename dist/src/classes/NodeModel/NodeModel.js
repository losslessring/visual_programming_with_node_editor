export class NodeModel {
    constructor({ id, data }) {
        this.id = id;
        this.data = data;
        this.children = [];
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getChildren() {
        return this.children;
    }
    addChild(node) {
        var _a;
        (_a = this.children) === null || _a === void 0 ? void 0 : _a.push(node);
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
}
