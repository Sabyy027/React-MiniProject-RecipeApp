import React, { useState, useEffect, use } from 'react'
import { useParams, Links } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe ,setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipe(response.data.meals ? response.data.meals[0] : null);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const getIngredients = (recipeData) => { // Helper function for ingredients
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipeData[`strIngredient${i}`];
      const measure = recipeData[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (!recipe) return <div className="text-center text-xl">Recipe not found!</div>;
  
  const ingredients = getIngredients(recipe);




  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-yellow-400 hover:text-yellow-300 mb-4 inline-block">&larr; Back to Recipes</Link>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-2">{recipe.strMeal}</h1>
      <p className="text-gray-400 text-lg mb-6">{recipe.strCategory} | {recipe.strArea}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded-lg shadow-lg w-full" />
        </div>

        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold border-b-2 border-yellow-400 pb-2 mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            {ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-semibold border-b-2 border-yellow-400 pb-2 mb-4 mt-8">Instructions</h2>
        <p className="whitespace-pre-wrap leading-relaxed">{recipe.strInstructions}</p>
      </div>

      {recipe.strYoutube && (
        <div className="mt-8">
          <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" 
             className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  )
}

export default RecipeDetailPage
