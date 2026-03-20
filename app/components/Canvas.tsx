"use client"
import { useState } from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';

type Props = {
    window: Window
}

export default function Canvas({ window }: Props) {
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
        <div className="canvas w-full h-full">
            <Stage
                // container={'canvas-container'}
                width={window.innerWidth}
                height={window.innerHeight}
                // draggable
                // style={{ cursor: 'crosshair' }}
            >
                <Layer>
                    <Text text="Try to drag shapes" fontSize={15} />
                     <Rect
                        x={20}
                        y={50}
                        width={100}
                        height={100}
                        fill="red"
                        // shadowBlur={10}
                        draggable
                    />
                    {/* render rectangle */}
                    <Circle
                        x={200}
                        y={100}
                        radius={50}
                        fill="green"
                        draggable
                    />
                </Layer>
            </Stage>
        </div>
    );
}