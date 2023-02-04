export class Connection {
    id: string


    constructor({id}: any) {
        this.id = id
    }

    initializeDraw(workspace: any) {
        workspace?.insertAdjacentHTML(
            "beforeend",
            `<svg id="svg_container_${this.id}" style="
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: -1;
                "
            >
            </svg>
            `
        )
    }

    draw() {
        document
            .querySelector(`#svg_container_${this.id}`)
            ?.insertAdjacentHTML(
                "beforeend",
                `<line id="svg_line_${this.id}" x1="10" y1="10" x2="200" y2="200" stroke="black" stroke-width="1"/>`
            )
    }
}