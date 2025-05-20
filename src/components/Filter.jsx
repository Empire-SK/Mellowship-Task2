import React from 'react';
import search from '../assets/search.png';
import '../css/PokemonList.css';

const Filter = ({ searchTerm, setSearchTerm, selectedType, setSelectedType }) => {
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleTypeFilter = (type) => {
        setSelectedType(type.toLowerCase() === selectedType.toLowerCase() ? '' : type.toLowerCase());
    };

    return (
        <div className="search-filter-container">
            <div className="search-container">
                <div className="search-input-container">
                    <img src={search} alt="Search icon" className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search Pokémon..."
                        value={searchTerm}
                        onChange={handleSearch}
                        aria-label="Search Pokémon by name"
                        className="search-input"
                    />
                </div>
            </div>

            <div className="type-filters">
                <span className="filter-label">Filter by type:</span>
                {['Fire', 'Grass', 'Ground', 'Water', 'Fighting', 'Poison', 'Flying', 'Psychic'].map((type) => (
                    <button
                        key={type}
                        className={`type-filter ${type.toLowerCase()} ${selectedType === type.toLowerCase() ? 'active' : ''}`}
                        onClick={() => handleTypeFilter(type)}
                        aria-pressed={selectedType === type.toLowerCase()}
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filter;