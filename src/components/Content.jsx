import React from 'react'
import { useTheme } from '../context/Themecontext'
import '../css/Content.css'

export const Content = () => {
    return (
        <div className="content">
            <h2>Welcome to the Pokémon Team Builder!</h2>
            <p>Here you can create your perfect Pokémon team.</p>
            <p>Select your favorite Pokémon and build a team that suits your style!</p>
        </div>
    )
}
