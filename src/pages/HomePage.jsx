import React, { useState, useEffect, useCallback } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchRecipes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]); // New: make sure recipes is empty if error
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-center">Discover Recipes</h1>
      <p className="text-center text-gray-400 mb-8">Find your next favorite meal from our extensive collection.</p>
      
      <SearchBar onSearch={handleSearch} /> {/* 5. Render the SearchBar */}

      {loading ? (
        <div className="text-center text-xl">Loading recipes...</div>
      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map(recipe => (
            <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl text-gray-500">
          No recipes found. Try a different search!
        </div> // 6. Add a "No results" message
      )}
    </div>
  );
};
export default HomePage;
