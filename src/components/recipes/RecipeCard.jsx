// RecipeGrid.js
import React from 'react';
import RecipeCard from './RecipeCard'; // Adjust the path accordingly

const RecipeGrid = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipes?.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe?.title}
          description={recipe?.description}
          image={recipe?.image}
        />
      ))}
    </div>
  );
};

export default RecipeGrid;
