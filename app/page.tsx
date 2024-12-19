import { Suspense } from 'react'
import { fetchCharacters } from './lib/data'
import { Character } from './utils/types'
import Home from './ui/Home'
 
export default async function Page() {
  const characters:Character[] = await fetchCharacters(1)
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home initialCharacters={characters} />
    </Suspense>
  )
}