import React, {useState, useEffect} from 'react'
import RecipeCard from '../components/RecipeCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fectchRecipes = async () => {
      try{
        setLoading(true);
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fectchRecipes();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Discover Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
          <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default HomePage
