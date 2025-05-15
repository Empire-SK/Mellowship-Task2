import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/Themecontext'
import '../css/Header.css'
import logo from '../assets/poke.png'

export const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-text">
                    <div className="logo-title-container">
                        <img src={logo} alt="Pokémon Logo" className="logo" />
                        <div className="title-container">
                            <h1>Pokémon Team Builder</h1>
                            <p>Build your perfect Pokémon team!</p>
                        </div>
                    </div>
                </div>
                <button 
                    onClick={toggleTheme}
                    className="theme-toggle"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
            </div>
        </header>
    )
}