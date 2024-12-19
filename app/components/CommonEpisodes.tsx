
import React from 'react';
import { Episode } from '../utils/types';
import styles from './CommonEpisodes.module.css';

interface CommonEpisodesProps {
  selectedCharacters: number[];
  commonEpisodes: Episode[];
}

const CommonEpisodes: React.FC<CommonEpisodesProps> = ({ selectedCharacters, commonEpisodes }) => (
  <div>
    <h2>Common Episodes</h2>
    {selectedCharacters.length === 2 ? (
      <ul className={styles.list}>
        {commonEpisodes.map((episode) => (
          <li className={styles.item} key={episode.id}>{episode.name}</li>
        ))}
      </ul>
    ) : (
      <p>Select two characters to find common episodes.</p>
    )}
  </div>
);

export default CommonEpisodes;