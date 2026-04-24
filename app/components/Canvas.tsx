"use client"
import { useState } from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';

// type Props = {
//     // add props here
// }

export default function Canvas({ }) {
    const [rectangle, setRectangle] = useState([
        {
            x: 20,
            y: 50,
            width: 100,
            height: 100,
            fill: "red",
            // shadowBlur={10}
            draggable: true
        }
    ]);

    return (
        // <div className="canvas">
            <Stage
                width={window.innerWidth}
                height={400}
                draggable
            >
                <Layer
                >
                    <Text draggable text="Try to drag shapes" fontSize={15} />
                     <Rect
                        x={20}
                        y={50}
                        width={100}
                        height={100}
                        fill="red"
                        shadowBlur={10}
                        draggable
                    />
                    <Circle
                        x={200}
                        y={100}
                        radius={50}
                        fill="green"
                        draggable
                    />
                </Layer>
            </Stage>
        // </div>
    );
}