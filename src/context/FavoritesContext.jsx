import React, { createContext, useState, useEffect, useContext } from 'react';

const FavoritesContext = createContext();
export const useFavorites = () => {
  return useContext(FavoritesContext);
};


export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]);
  };

  const removeFavorite = (recipeId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(recipe => recipe.idMeal !== recipeId));
  };

  const isFavorite = (recipeId) => {
    return favorites.some(recipe => recipe.idMeal === recipeId);
  };

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};