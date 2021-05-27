import { createContext, useState } from 'react';
import PersonsForm from './secondTest/PersonsForm';

// Interfaz para el objeto de personas
interface IPerson {
  name: string;
  lastName: string;
}

// Type del contextStore (como se va a almacenar el context)
// Se deberia meter en un archivo aparte que se llame types e importarlo aqui
type ContextStore = {
  persons: IPerson[];
  addPerson: (person: IPerson) => void;
};

// Valores iniciales del context, deben ser del type del context
const contextDefaultValues: ContextStore = {
  persons: [],
  addPerson: () => {},
};

// Crear y exportar el context con su type
export const storeContext = createContext<ContextStore>(contextDefaultValues);

const SecondTest = () => {
  // State con los valores por defecto de la interfaz de personas por su valor inicial
  // el valor inicial es el arreglo de personas del context
  const [persons, setPersons] = useState<IPerson[]>(
    contextDefaultValues.persons
  );

  // Funcion para agregar personas que recibe la nueva persona de la interfaz persona y hacer el setPersons
  const addPerson = (newPerson: IPerson) =>
    setPersons((persons) => [...persons, newPerson]);

  return (
    <storeContext.Provider value={{ persons, addPerson }}>
      <h2>Test2</h2>
      <hr />
      <PersonsForm />
    </storeContext.Provider>
  );
};

export default SecondTest;
