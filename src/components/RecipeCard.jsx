import React from "react";
import { useFavorites } from "../context/FavoritesContext";

const RecipeCard = ({ recipe }) => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isCurrentlyFavorite = isFavorite(recipe.idMeal);
    const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCurrentlyFavorite) {
      removeFavorite(recipe.idMeal);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 relative hover:scale-105">
      
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-2 right-2 p-2 rounded-full transition-colors duration-300
                    ${isCurrentlyFavorite ? 'bg-red-500 text-white' : 'bg-slate-700/50 text-white/70 hover:bg-red-500 hover:text-white'}`}
        aria-label="Add to favorites"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isCurrentlyFavorite ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>

      <img 
        src={recipe.strMealThumb} 
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 truncate">{recipe.strMeal}</h3>
        <p className="text-gray-400">{recipe.strCategory}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
