import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState([]);
 
  return (
     <PokemonContext.Provider value={{ pokemon}}>
      {children}
      </PokemonContext.Provider>
  );
}

// mini hook
export const usePokemonContext = () => useContext(PokemonContext);
