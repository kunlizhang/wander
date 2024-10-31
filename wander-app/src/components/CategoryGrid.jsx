import React from "react";
import CategoryButton from "./CategoryButton";

function CategoryGrid({ categories }) {
    return (
        <div className="grid grid-cols-3 gap-3">
            {categories.map(category => (
                <CategoryButton
                key={category.name}
                imageSrc={category.image} // Dynamically require each image
                text={category.name}
                />
            ))}
        </div>
     );
}

export default CategoryGrid;