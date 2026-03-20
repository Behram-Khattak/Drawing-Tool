"use client"

export default function Toolbar() {
    return (
        <div className="toolbar w-fit h-full flex items-center py-4">
            <button className="tool-button mb-4 p-2 rounded shadow">Pencil</button>
            <button className="tool-button mb-4 p-2 rounded shadow">Eraser</button>
            {/* dropdown with colors */}
            <select className="tool-button mb-4 p-2 rounded shadow">
                <option >Colors</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
            {/* dropdown with shapes */}
            <select className="tool-button mb-4 p-2 rounded shadow">
                <option >Shapes</option>
                {/* <option value="rectangle" onClick={setRectangle}>Rectangle</option> */}
                <option value="circle">Circle</option>
                <option value="square">Square</option>
            </select>
        </div>
    );
}