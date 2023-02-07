export class NodeModel {
    private id: number
    private data: any
    private children: NodeModel[]

    constructor({id, data}: any) {
        this.id = id
        this.data = data
        this.children = []
    }

    getId() {
        return this.id
    }
    
    setId(id: number) {
        this.id = id
    }

    getChildren() {
        return this.children
    }

    addChild(node: NodeModel) {
        this.children?.push(node)
    }

    getData() {
        return this.data
    }

    setData(data: any) {
        this.data = data
    }
}