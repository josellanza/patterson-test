'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import styles from './Home.module.css'
import { Character, Episode } from '../utils/types';
import { fetchCharacterDetails, fetchCharacters, fetchCommonEpisodes } from '../lib/data';
import Pagination from '../components/Pagination';
import CommonEpisodes from '../components/CommonEpisodes';
import Card from '../components/Card';

interface HomeProps {
  initialCharacters: Character[];
}

const Home: React.FC<HomeProps> = ({ initialCharacters }) => {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);
  const [page, setPage] = useState<number>(1);
  const [selectedCharacters, setSelectedCharacters] = useState<number[]>([]);
  const [commonEpisodes, setCommonEpisodes] = useState<Episode[]>([]);

  const toggleCharacterSelection = async (id: number) => {
    const updatedSelection = selectedCharacters.includes(id)
      ? selectedCharacters.filter((cid) => cid !== id)
      : [...selectedCharacters, id].slice(-2);

    setSelectedCharacters(updatedSelection);  

    if (updatedSelection.length === 1) {
      const details = await fetchCharacterDetails(updatedSelection[0]);
      setCommonEpisodes([]);
    } else if (updatedSelection.length === 2) {
      const episodes = await fetchCommonEpisodes(updatedSelection);
      setCommonEpisodes(episodes);
    } else {
      setCommonEpisodes([]);
    }
  };

  const changePage = async (newPage: number) => {
    const newCharacters = await fetchCharacters(newPage);
    setCharacters(newCharacters);
    setPage(newPage);
  };

  return (
    <div>
      <Head>
        <title>Rick and Morty Characters</title>
        <meta name="description" content="List of Rick and Morty characters and their details." />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title} >Rick and Morty Characters</h1>
        <Pagination page={page} changePage={changePage} />
        <div className={styles.card}>
          {characters.map((character) => (
            <Card
              key={character.id}
              character={character}
              onSelect={toggleCharacterSelection}
              isSelected={selectedCharacters.includes(character.id)}
            />
          ))}
        </div>
        {commonEpisodes.length && <CommonEpisodes selectedCharacters={selectedCharacters} commonEpisodes={commonEpisodes} />}
      </main>
    </div>
  );
};

export default Home;