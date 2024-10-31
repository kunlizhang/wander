import React from "react";
import CategoryButton from "./CategoryButton";
import OtherButton from "./OtherButton";
import { useState } from "react";

function CategoryGrid({ categories }) {
    const [showAll, setShowAll] = useState(false);
    const [showedCategories, setShowedCategories] = useState(categories.slice(0, 9));

    const handleShowAll = () => {
        if (showAll) {
            setShowedCategories(categories.slice(0, 9));
        } else {
            setShowedCategories(categories);
        }
        setShowAll(!showAll);

    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-3">
                {showedCategories.map(category => (
                    <CategoryButton
                    key={category.name}
                    imageSrc={category.image} // Dynamically require each image
                    text={category.name}
                    />
                ))}
            </div>
            <div className="mt-12"></div>
            { !showAll && 
                <OtherButton text="+ Other" onClick={handleShowAll} width="96" height="12" />
            }
        </div>
     );
}

export default CategoryGrid;