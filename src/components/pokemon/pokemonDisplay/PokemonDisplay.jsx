import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addPokedex, fetchPokemon } from "../pokemonSlice";
import classes from "./PokemonDisplay.module.css";

const PokemonDisplay = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    dispatch(fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id.id}`)).then(
      (response) => {
        setPokemon(response.payload);
      }
    );
  }, []);

  return (
    <>
      {pokemon && (
        <div className={classes.container}>
          <div className={classes.pokemon}>
            <div className={classes.pokemonInfos}>
              <h1>{pokemon.name}</h1>
              <img
                src={pokemon.sprites.front_default}
                alt="pokemon"
                className={classes.pokemonImg}
              />
              <button
                className="btn btn-success"
                onClick={() => dispatch(addPokedex(pokemon))}
              >
                Ajouter au pokedex
              </button>
              <p>Numéro de Pokédex: {pokemon.id}</p>
              <p>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
              <p>Description: {pokemon.description}</p>
            </div>
            <div className={classes.stats}>
              <h2>Statistiques de base</h2>
              <p>PV: {pokemon.stats.find(stat => stat.stat.name === "hp").base_stat}</p>
              <p>Attaque: {pokemon.stats.find(stat => stat.stat.name === "attack").base_stat}</p>
              <p>Défense: {pokemon.stats.find(stat => stat.stat.name === "defense").base_stat}</p>
              {/* Ajoutez d'autres statistiques si nécessaire */}
            </div>
          </div>
          {pokemon.evolutions && (
            <div className={classes.evolutions}>
              <h2>Évolutions</h2>
              {pokemon.evolutions.map((evolution, index) => (
                <div key={index}>
                  <p>{evolution.name}</p>
                  <img src={evolution.imageUrl} alt={evolution.name} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PokemonDisplay;




// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { addPokedex, fetchPokemon } from "../pokemonSlice";
// import classes from "./PokemonDisplay.module.css";

// const PokemonDisplay = () => {
//   const id = useParams();
//   const dispatch = useDispatch();
//   const [pokemon, setPokemon] = useState(null);

//   useEffect(() => {
//     dispatch(fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id.id}`)).then(
//       (response) => {
//         setPokemon(response.payload);
//       }
//     );
//   }, []);

//   return (
//     <>
//       {pokemon && (
//         <div className={classes.container}>
//           <div className={classes.pokemon}>
//             <div className={classes.pokemonInfos}>
//               <h1>{pokemon.name}</h1>
//               <img
//                 src={pokemon.sprites.front_default}
//                 alt="pokemon"
//                 className={classes.pokemonImg}
//               />
//               <button
//                 className="btn btn-success"
//                 onClick={() => dispatch(addPokedex(pokemon))}
//               >
//                 Ajouter au pokedex
//               </button>
//             </div>
//             <div className={classes.stats}>
//               <h1>HEIGHT</h1>
//               <p>{pokemon.height}</p>
//               <h1>weight</h1>
//               <p>{pokemon.weight}</p>
//               <h1>XP</h1>
//               <p>{pokemon.base_experience}</p>
//               <h1>ABILITIES</h1>
//               {pokemon.abilities.map((ability, key) => {
//                 return (
//                   <span className={classes.abilities} key={key}>
//                     {ability.ability.name}
//                   </span>
//                 );
//               })}
//               <h1>TYPE</h1>
//               {pokemon.types.map((type, key) => {
//                 return (
//                   <span className={classes.type} key={key}>
//                     {type.type.name}
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
//           <div className={classes.moves}>
//             <h1>MOVES</h1>
//             {pokemon.moves.map((move, key) => {
//               return (
//                 <span className={classes.move} key={key}>
//                   {move.move.name}
//                 </span>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default PokemonDisplay;
