import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import Spinner from '../components/Spinner';

const HomePage = () => {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');


  useEffect(() => {
    const fetchRecipesData = async () => {
      setLoading(true);
      let url = '';

      if (selectedCategory) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
      }

      try {
        const response = await axios.get(url);
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipesData();
  }, [searchQuery, selectedCategory]);

  React.useEffect(() => {
    const resetHandler = () => {
      setSearchQuery('');
      setSelectedCategory('');
    };
    window.addEventListener('resetHomePage', resetHandler);
    return () => window.removeEventListener('resetHomePage', resetHandler);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        setCategories(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);


  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory('');
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  if (loading) {
    return <Spinner />;
  }
  

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-center">Discover Recipes</h1>
      <p className="text-center text-gray-400 mb-8">Find your next favorite meal from our extensive collection.</p>
      
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      
      <FilterDropdown 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map(recipe => (
            <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl text-gray-500 mt-10">
          <p>No recipes found.</p> 
          <p className="text-base">Try a different search or filter!</p>
        </div>
      )}
    </div>
  );

} 

export default HomePage;