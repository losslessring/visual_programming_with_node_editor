export class Connection {
    constructor({ id }) {
        this.id = id;
    }
    initializeDraw(workspace) {
        workspace === null || workspace === void 0 ? void 0 : workspace.insertAdjacentHTML("beforeend", `<svg id="svg_container_${this.id}" style="
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: -1;
                "
            >
            </svg>
            `);
    }
    draw() {
        var _a;
        (_a = document
            .querySelector(`#svg_container_${this.id}`)) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML("beforeend", `<line id="svg_line_${this.id}" x1="10" y1="10" x2="200" y2="200" stroke="black" stroke-width="1"/>`);
    }
}
