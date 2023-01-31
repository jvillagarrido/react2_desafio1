import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import PokemonesProvider from  "./context/PokemonesContext"
 
root.render(
  <StrictMode>
    <PokemonesProvider>
   
       <App />
     
    </PokemonesProvider>
  </StrictMode>
);
