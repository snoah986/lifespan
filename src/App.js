import { useState } from 'react';
import CharacterCreation from './components/CharacterCreation';
import GameHub from './components/GameHub';

export default function App() {
  const [character, setCharacter] = useState(null);

  return (
    <div style={{
      backgroundColor: '#0d0d0d',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      {!character
        ? <CharacterCreation onComplete={setCharacter} />
        : <GameHub character={character} onUpdateCharacter={setCharacter} />
      }
    </div>
  );
}
