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
                <div id="node_code_input_container_${id}" style="display:flex;">
                    <input type="text" id="node_code_input_${id}" style="
                            width: 100%;
                            border: none;
                            border-radius: 2px;
                            margin: 3px 1px 0px 1px
                    ">    
                </div>
                <div id="node_output_container_${id}"
                    style="
                        position: absolute;
                        top: 4px;
                        right: -6px;
                        cursor: alias;
                ">
                    <div id="node_output_${id}" data-node_id="${id}"
                        style="
                            width: 16px;
                            height: 16px;
                            background-color: #c3fa9e;
                            border-radius: 50%;
                            box-sizing: border-box;
                            border: 2px solid #6a6a6a;
                    ">
                    </div>
                </div>
                <div id="node_input_container_${id}"
                    style="
                        position: absolute;
                        top: 4px;
                        right: 94px;
                        cursor: alias;
                ">
                    <div id="node_input_${id}" data-node_id="${id}"
                        style="
                            width: 16px;
                            height: 16px;
                            background-color: #c3fa9e;
                            border-radius: 50%;
                            box-sizing: border-box;
                            border: 2px solid #6a6a6a;
                    ">
                    </div>
                </div>

            </div>
            `;
}
