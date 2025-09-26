import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
      <header className="bg-slate-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300">
                RecipeFinder
            </Link>
            <Link to="/" className="px-3 py-2 rounded hover:bg-slate-700">Home</Link>
            <Link to="/favorites" className="px-3 py-2 rounded hover:bg-slate-700">Favorites</Link>
        </div>

      </header>
    
  )
}

export default Header
