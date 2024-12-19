export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
  origin: {
    name: string;
  };
  episode: string[];
}

export interface Episode {
  id: number;
  name: string;
}