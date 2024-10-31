import React from "react";
import Checkable from "./Checkable";

function CheckableGrid({ items }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {items.map((item, index) => (
                Checkable({ text: item, width: 48, height: 12, key: index })
            ))}
        </div>
    );
}

export default CheckableGrid;
