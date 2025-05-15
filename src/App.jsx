import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { ThemeProvider } from './context/Themecontext';
import { Content } from './components/Content'
import { useTheme } from './context/Themecontext'
import PokemonList from './components/PokemonList';

export const App = () => {
    return (
        <ThemeProvider>
            <Header />
            <Content />
            <PokemonList />
        </ThemeProvider>
    )
}