// RecipeList.js
import React from 'react';
import { recipes } from './data';
import RecipeCard from './RecipeCard';


const RecipeList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {recipes?.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
