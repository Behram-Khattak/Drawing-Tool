"use client"
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';

export default function Canvas() {
    return (
        <div className="canvas bg-gray-50 w-full h-full">
            <Stage width={window.innerWidth} height={window.innerHeight}
                draggable
                dragDistance={10}
                style={{ cursor: 'crosshair' }}
                >
                <Layer scale={2.0}>
                    <Text text="Try to drag shapes" fontSize={15} />
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
        </div>
    );
}