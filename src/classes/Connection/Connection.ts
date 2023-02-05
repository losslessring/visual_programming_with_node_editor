export class Connection {
    id: string
    fromElement: HTMLElement
    toElement: HTMLElement

    constructor({id, fromElement, toElement}: any) {
        this.id = id
        this.fromElement = fromElement
        this.toElement = toElement
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
        console.log(this.fromElement)
        console.log(this.toElement)
        console.log(this.id)
        const fromBoundingRect = this.fromElement.getBoundingClientRect()
        const toBoundingRect = this.toElement.getBoundingClientRect()

        const fromX = fromBoundingRect.left + (fromBoundingRect.right - fromBoundingRect.left) / 2
        const fromY = fromBoundingRect.top + (fromBoundingRect.bottom - fromBoundingRect.top) / 2

        const toX = toBoundingRect.left + (toBoundingRect.right - toBoundingRect.left) / 2
        const toY = toBoundingRect.top + (toBoundingRect.bottom - toBoundingRect.top) / 2

        document
            .querySelector(`#svg_container_${this.id}`)
            ?.insertAdjacentHTML(
                "beforeend",
                `<line id="svg_line_${this.id}" x1="${fromX}" y1="${fromY}" x2="${toX}" y2="${toY}" stroke="black" stroke-width="1"/>`
            )
    }

    erase() {
        document.querySelector(`#svg_line_${this.id}`)?.remove()
    }

    update() {
        this.erase()
        this.draw()
    }
}