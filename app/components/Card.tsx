import React from 'react';
import { Character } from "../utils/types";
import styles from './Card.module.css'
import classNames from 'classnames';

interface CardProps {
  character: Character;
  onSelect: (id: number) => Promise<void>;
  isSelected: boolean;
}

const Card: React.FC<CardProps> = ({ character, onSelect, isSelected }) => (
  <div
    onClick={() => onSelect(character.id)}
    className={classNames(styles.card, isSelected && styles.cardSelected)}
  >
    <img src={character.image} alt={character.name} />
    <div className={styles.container}>
      <h3>{character.name}</h3>
      {isSelected && (
        <div>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Origin:</strong> {character.origin.name}</p>
        </div>
      )}
    </div>
  </div>
);

export default Card