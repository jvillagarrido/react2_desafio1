import { createContext, useContext, useState } from "react";

export const PokemonesContext = createContext();

export default function PokemonesProvider({ children }) {
  const [pokemones, setPokemones] = useState([]);
 
  return (
     <PokemonesContext.Provider value={{ pokemones}}>
      {children}
      </PokemonesContext.Provider>
  );
}

// mini hook
export const usePokemonesContext = () => useContext(PokemonesContext);
