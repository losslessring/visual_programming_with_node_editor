export function generateNodeHtml() {
    return `<div id="node_container" style="
                width: 100px;
                height: 100px;
                top: 200px;
                left: 200px;
                background:#777;
                border-radius: 8px;
                position: absolute;
                padding: 2px;
            ">
                <div id="node_title" style="
                    background-color: #c3fa9e;
                    cursor: grabbing;
                    border-radius: 6px 6px 0 0; 
                    padding: 2px 0px 2px 0px; 
                    text-align: center;
                ">Title
                </div>

            </div>
            `
}
