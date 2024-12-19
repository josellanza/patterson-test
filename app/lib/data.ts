import { Character, Episode } from "../utils/types";

export async function fetchCharacters(page: number): Promise<Character[]> {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await res.json();
  return data.results;
}

export async function fetchCharacterDetails(id: number): Promise<Character> {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return res.json();
}

export async function fetchCommonEpisodes(ids: number[]): Promise<Episode[]> {
  if (ids.length !== 2) return [];
  const [firstId, secondId] = ids;

  const responses = await Promise.all([
    fetch(`https://rickandmortyapi.com/api/character/${firstId}`),
    fetch(`https://rickandmortyapi.com/api/character/${secondId}`),
  ]);
  const [firstCharacter, secondCharacter] = await Promise.all(responses.map((res) => res.json()));

  const commonEpisodeUrls = firstCharacter.episode.filter((ep: string) => secondCharacter.episode.includes(ep));
  const episodes = await Promise.all(commonEpisodeUrls.map((url: string) => fetch(url).then((res) => res.json())));

  return episodes;
}