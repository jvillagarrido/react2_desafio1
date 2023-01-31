import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function  UnPokemon () {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);
  let { url } = useParams();

  const getData = async () => {
    try{
      console.log(url);
     const res = await fetch(`${url}`)
    if (!res.ok) throw "Error al cargar datos de pokemon";
  
     const data = await res.json();
      setPokemon(data.results);
    } catch (error) {
      navigate("/");
    }
    }

  useEffect(() => {  getData();}, []);
  
  return (
    <article>
       <h1>Datos del pokemon </h1>
      
   
  
    </article>

);}

 
 