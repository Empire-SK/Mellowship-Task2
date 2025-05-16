import React from 'react';
import { X } from 'lucide-react';
import '../css/TeamDisplay.css';

const TeamDisplay = ({ team, removeFromTeam }) => {
    if (team.length === 0) return null;

    return (
        <div className="team-display">
            <div className="team-header">
                <h3>Your Team ({team.length}/6)</h3>
            </div>
            <div className="team-members">
                {team.map((pokemon) => (
                    <div key={pokemon.id} className="team-member-card">
                        <button 
                            className="remove-button" 
                            onClick={() => removeFromTeam(pokemon.id)}
                            aria-label={`Remove ${pokemon.name} from team`}
                        >
                            <X size={16} />
                        </button>
                        <img 
                            src={pokemon.sprites.front_default} 
                            alt={pokemon.name} 
                            className="team-pokemon-image" 
                        />
                        <h4>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
                        <div className="team-pokemon-types">
                            {pokemon.types.map((type) => (
                                <span 
                                    key={type.type.name}
                                    className={`type-badge ${type.type.name}`}
                                >
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                        <div className="team-pokemon-stats">
                            {['hp', 'attack', 'defense', 'speed'].map((statName) => {
                                const stat = pokemon.stats.find(s => s.stat.name === statName);
                                return (
                                    <div key={statName} className="team-stat">
                                        {statName.toUpperCase()}: {stat.base_stat}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamDisplay;