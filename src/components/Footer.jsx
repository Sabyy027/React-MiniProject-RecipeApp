import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-slate-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
            <p>&copy; {currentYear} RecipeFinder. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
