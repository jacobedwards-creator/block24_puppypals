import { useState } from 'react';
import './App.css';
import { puppyList } from './data.js';

function App() {
  const [featPupId, setFeatPupId] = useState(puppyList[0]?.id || null);
  const featuredPup = puppyList.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <h1>Puppy Pals</h1>
      <div className="puppy-list">
        {puppyList.map((puppy) => (
          <button
            onClick={() => setFeatPupId(puppy.id)}
            key={puppy.id}
            className="puppy-name"
          >
            {puppy.name}
          </button>
        ))}
      </div>
      
      {featuredPup && (
        <div className="details">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>
              Tricks: {featuredPup.tricks.length > 0 ? (
                <ul>
                  {featuredPup.tricks.map(trick => (
                    <li key={trick.id}>{trick.title}</li>
                  ))}
                </ul>
              ) : 'None'}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

