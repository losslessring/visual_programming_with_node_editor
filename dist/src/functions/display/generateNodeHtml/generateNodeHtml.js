export function generateNodeHtml({ id, positionX, positionY }) {
    return `<div id="node_container_${id}" style="
                width: 100px;
                height: 100px;
                left: ${positionX}px;
                top: ${positionY}px;
                background:#777;
                border-radius: 8px;
                position: absolute;
                padding: 2px;
            ">
                <div id="node_title_${id}" style="
                    background-color: #c3fa9e;
                    cursor: grabbing;
                    border-radius: 6px 6px 0 0; 
                    padding: 2px 0px 2px 0px; 
                    text-align: center;
                ">${id}
                </div>

            </div>
            `;
}
