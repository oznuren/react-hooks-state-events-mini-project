import React from "react";

function CategoryFilter({ categories, currCategory, setCurrCategory }) {
  const handleCategory = (e) => {
    setCurrCategory(e.target.value);
  };
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button
            key={category}
            value={category}
            className={currCategory === category ? "selected" : ""}
            onClick={handleCategory}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
