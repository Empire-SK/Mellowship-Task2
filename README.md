# 🧩 Pokémon Team Builder

## 📖 Overview

The Pokémon Team Builder is a React-based web application that allows users to browse, search, and filter Pokémon using the PokéAPI. Users can view detailed information for each Pokémon—such as name, types, stats, and sprites—and build a team of up to six Pokémon. The app features a responsive design, dark/light theme support, and an intuitive user interface.

# ✨ Features
- Browse Pokémon: Grid display with names, images, types, and stats (HP, Attack, Defense, Speed).

- Search: Search by name using a dynamic input field.

- Filter by Type: Toggleable buttons to filter by Pokémon type (e.g., Fire, Water, Grass).

- Team Building: Add or remove Pokémon to/from a team (maximum 6 Pokémon).

- Loading & Error Handling: Displays a spinner while fetching data; handles API errors gracefully.

- Theme Support: Toggle between light and dark modes using a custom ThemeContext.

- Responsive Design: Fully responsive using Tailwind CSS or custom CSS for various screen sizes.

# 🛠 Tech Stack





- Frontend: React, JavaScript, JSX



- API: Pokémon API (https://pokeapi.co/)



- Styling: Custom CSS (App.css, PokemonList.css)



- Context: React Context API for theme management



- Build Tool: Vite or Create React App (adjust based on your setup)



- Dependencies: None for API calls (uses native fetch); optional Axios for alternative HTTP requests

# 📁 Project Structure
``` bash
src/
├── api/
│   └── pokemonapi.js        # API fetching logic
├── assets/
│   ├── pokeball.png        # Loading spinner image
│   ├── search.png          # Search icon
├── components/
│   ├── Content.jsx         # Main content component
│   ├── Filter.jsx          # Search and type filter component
│   ├── Header.jsx          # Header component
│   ├── PokemonList.jsx     # Pokémon grid and team management
│   ├── TeamDisplay.jsx     # Displays selected team
├── context/
│   └── Themecontext.jsx    # Theme context for styling
├── css/
│   ├── App.css             # Global styles
│   ├── PokemonList.css     # Styles for Pokémon list and filter
├── App.jsx                 # Main app component
└── index.jsx               # Entry point
```

# 🚀 Installation & Setup
## 1. Clone the Repository
```bash
git clone https://github.com/your-username/pokemon-collection-app.git
cd pokemon-collection-app
```

## 2. Install Dependencies
Make sure Node.js is installed. Then run:
```bash
npm install
```

3. Start the Development Server
```bash
npm start
```