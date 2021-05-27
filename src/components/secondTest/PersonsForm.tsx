import { useContext } from 'react';
import { storeContext } from '../SecondTest';

const PersonsForm = () => {
  const context = useContext(storeContext);
  const { persons, addPerson } = context;

  return (
    <>
      <button onClick={() => addPerson({ name: 'paps', lastName: 'pech' })}>
        Add Person
      </button>
      {persons.map((person, index) => (
        <div key={index}>
          <h1>
            {person.name} {person.lastName}
          </h1>
          <p>=======================================</p>
        </div>
      ))}
    </>
  );
};

export default PersonsForm;
