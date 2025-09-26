import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import Layout from './components/Layout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path = "favorites" element={<FavoritesPage />} />
        <Route path = "recipe/:id" element={<RecipeDetailPage />} />
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App

