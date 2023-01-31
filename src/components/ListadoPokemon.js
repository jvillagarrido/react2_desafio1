import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function  ListadoPokemon () {
  const navigate = useNavigate();
  const [listadoPokemon, setListadoPokemon] = useState([]);
  let { id  } = useParams();
  let { url  } = useParams();
  const getData = async () => {
    try{
     const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    //const res = await fetch('pokemones.json')
    if (!res.ok) throw "Error al cargar el listado";
     const data = await res.json();
      setListadoPokemon(data.results);
    } catch (error) {
      navigate("/");
    }
    }

  useEffect(() => {  getData();}, []);
  
  const handleClick = (e) => {
    navigate(`/pokemones?${id}`);
    
     };

     const  handleSelect= (e) => {
      let index = e.target.selectedIndex;
      id = e.target.options[index].text;
      url = e.target.options[index].value;
     };
 

  return (
    <div className="container">
        <select id="select" className="listado" onChange={(e) => { handleSelect(e) }} >
        {listadoPokemon.map((item) => {
           return (
             <option key={item.name} value={item.url}  >  {item.name}  </option>
                  );
          })}
        </select>
        <button className="boton" onClick={(e) => { handleClick(e) }} >Ver Detalle</button>
    </div>

);}

 
 