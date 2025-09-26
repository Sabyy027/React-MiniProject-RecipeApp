# Recipe Finder Application 🍳

A dynamic and themed recipe application built with React. Users can browse, search, filter, and save their favorite recipes, all fetched from TheMealDB API. This project was built to demonstrate a strong understanding of modern front-end development practices.

**Live Site URL:** [**Add Your Deployed Netlify URL Here**]



---

## Features

-   **Dynamic Recipe Search:** Search for recipes by name.
-   **Category Filtering:** Filter recipes by a comprehensive list of meal categories.
-   **Favorites System:** Save favorite recipes using a "Chef's Hat" icon. Favorites persist even after closing the browser, thanks to `localStorage`.
-   **Detailed Recipe View:** Click on any recipe to see a full page with ingredients, step-by-step instructions, and a link to a YouTube tutorial.
-   **Responsive Themed UI:** A custom, kitchen-inspired theme with unique fonts and a warm color palette that looks great on all screen sizes.
-   **Modern State Management:** Uses React Context API to manage global state for favorites, ensuring a clean and scalable architecture.

---

## Tech Stack

-   **Framework:** React.js (with Vite)
-   **Styling:** Tailwind CSS (with a JIT compiler for optimized, utility-first styling)
-   **State Management:** React Hooks (`useState`, `useEffect`, `useCallback`) & Context API
-   **API Requests:** Axios
-   **Routing:** React Router DOM
-   **Deployment:** Netlify

---

## Project Journey & Development Approach

This project was built incrementally, with each step focusing on a specific piece of functionality. This methodical approach ensured a clean codebase and a clear development process, with each feature being version-controlled through Git.

-   **Step 1: Foundation & Setup**
    -   Initialized the project using Vite for a fast, modern development environment.
    -   Installed and configured Tailwind CSS for styling, Axios for data fetching, and React Router for navigation.
    -   Set up the Git repository and pushed the initial commit.

-   **Step 2: Layout & Routing**
    -   Built the core application skeleton with reusable `Header`, `Footer`, and `Layout` components.
    -   Defined all application routes (`/`, `/recipe/:id`, `/favorites`) to establish the app's navigation structure.

-   **Step 3: API Integration & Homepage**
    -   Fetched an initial list of recipes from TheMealDB API using Axios.
    -   Managed loading and data states with `useState` and `useEffect`.
    -   Displayed the recipes in a responsive grid using a reusable `RecipeCard` component.

-   **Step 4: Detailed View**
    -   Made recipe cards clickable, linking to a dynamic route for each recipe.
    -   Implemented the `RecipeDetailPage`, which uses the `useParams` hook to fetch and display complete details for a specific meal.

-   **Step 5: Search & Filtering Logic**
    -   Added a search bar to allow users to find recipes by name.
    -   Implemented a category dropdown, fetching the list of categories from the API.
    -   Engineered the core data-fetching logic to intelligently switch between search and filter API endpoints, ensuring a seamless user experience.

-   **Step 6: Global State & Favorites System**
    -   Introduced the React Context API to manage the "favorites" list across the entire application.
    -   Integrated `localStorage` to persist user favorites between sessions.
    -   Added a "favorite" button (a chef's hat icon) to each recipe card.

-   **Step 7: Thematic UI & Final Polish**
    -   Designed and implemented a custom, kitchen-inspired theme.
    -   Configured `tailwind.config.js` with custom fonts (Playfair Display, Lato) and a warm color palette.
    -   Refined the UI of all components, including cards, buttons, and forms, to create a polished and visually appealing final product.

---
