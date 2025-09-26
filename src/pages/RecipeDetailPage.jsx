import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.887 3.437-.004 4.891 0 8.049v7.902c.004 3.158.887 4.613 4.385 4.864 3.6.245 11.626.246 15.23 0 3.498-.25 4.385-1.706 4.385-4.864V8.049c0-3.158-.887-4.612-4.385-4.865zM9.545 15.568V7.502L15.82 11.535l-6.275 4.033z" />
  </svg>
);

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
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

  const getIngredients = (recipeData) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipeData[`strIngredient${i}`];
      const measure = recipeData[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ measure, ingredient });
      }
    }
    return ingredients;
  };

  if (loading) return <Spinner />;
  if (!recipe) return <div className="text-center text-xl">Recipe not found!</div>;

  const ingredients = getIngredients(recipe);

  return (
    <div className="bg-brand-bg/80 backdrop-blur-sm border-2 border-yellow-500/30 font-body text-brand-text rounded-2xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto">
      
      
      <Link to="/" className="font-display text-yellow-500 hover:text-yellow-600 mb-6 inline-flex items-center transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Recipes
      </Link>
      
      <h1 className="font-display text-4xl md:text-5xl text-brand-primary font-bold mb-2">{recipe.strMeal}</h1>
      <p className="font-body text-brand-text/70 text-lg mb-8 tracking-wider">{recipe.strCategory} • {recipe.strArea}</p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
        <div className="md:col-span-2">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded-xl shadow-lg border-4 border-yellow-500/50 w-full" />
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-3xl text-brand-primary border-b-2 border-yellow-500 pb-2 mb-4">Ingredients</h2>
          <ul className="space-y-3">
            {ingredients.map((ing, index) => (
              <li key={index} className="flex items-start">
                <span className="text-brand-accent text-xl mr-3 mt-1">✓</span>
                <div>
                  <span className="font-bold">{ing.measure}</span> - <span className="text-brand-text/90">{ing.ingredient}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="font-display text-3xl text-brand-primary border-b-2 border-yellow-500 pb-2 mb-4">Instructions</h2>
        <blockquote className="whitespace-pre-wrap leading-relaxed font-body text-brand-text/90 border-l-4 border-yellow-500 pl-4 italic">
          {recipe.strInstructions}
        </blockquote>
      </div>

      {recipe.strYoutube && (
        <div className="mt-10 text-center">
          <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1">
            <YoutubeIcon />
            Watch Tutorial
          </a>
        </div>
      )}
    </div>
  )
}

export default RecipeDetailPage;