import React from 'react'

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400/50 transition-shadow duration-300">
      <img
      src = {recipe.strMealThumb}
      alt = {recipe.strMeal}
      className="w-full h-48 object-cover"
       />
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2 truncate">{recipe.strMeal}</h3>
            <p className="text-gray-400">{recipe.strInstructions}</p>
        </div>
    </div>
  )
}

export default RecipeCard
