import React, { useState } from 'react';
import './App.scss';
import { peopleFromServer } from './data/people';
import { Person } from './types/Person';
import { Autocomplete } from './components/Autocomplete/Autocomplete';

export const App: React.FC = () => {
  // 🔹 зберігаємо вибрану людину
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <div className="container">
      <main className="section is-flex is-flex-direction-column">
        {/* 🔹 Заголовок */}
        <h1 className="title" data-cy="title">
          {selectedPerson
            ? `${selectedPerson.name} (${selectedPerson.born} - ${selectedPerson.died})`
            : 'No selected person'}
        </h1>

        {/* 🔹 Автозаповнення */}
        <Autocomplete
          people={peopleFromServer}
          delay={300}
          onSelected={setSelectedPerson}
        />
      </main>
    </div>
  );
};
