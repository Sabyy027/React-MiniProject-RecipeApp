import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-slate-800 text-white p-4 mt-auto font-quicksand">
        <div className="container mx-auto text-center">
            <p className="font-comic">&copy; {currentYear} <span className="font-tilt">RecipeFinder</span>. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
