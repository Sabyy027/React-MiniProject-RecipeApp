import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Your Favorite Recipes
      </h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((recipe) => (
            <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl text-gray-500">
          <p>You haven't saved any favorite recipes yet.</p>
          <p>Click the heart icon on any recipe to add it here!</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
