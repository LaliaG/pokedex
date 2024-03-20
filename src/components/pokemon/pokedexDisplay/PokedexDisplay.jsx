import { useDispatch, useSelector } from "react-redux"
import classes from "./Pokedex.module.css"
import { changeDisplayPokedex } from "../pokemonSlice"
import { StyleSheet, Text, View, Image } from 'react-native'

const PokedexDisplay = () => {
    const pokedex = useSelector(state => state.pokemons.pokedex)
    const dispatch = useDispatch()
    console.log(pokedex);
    return (  
        <>
            {
                pokedex.map((pokemon, key) => (
                    <div key={key} className={classes.content}>
                        <img src={pokemon.sprites.front_default} alt="" />
                        <p>name <br/>{pokemon.name}</p>
                        <p>height <br/>{pokemon.height}</p>
                        <p>weight <br/>{pokemon.weight}</p>
                    </div>
                ))
            }
            <button className="mt-1 btn btn-primary" onClick={() => dispatch(changeDisplayPokedex())}>Close</button>
        </>
    );
}
 
export default PokedexDisplay;
const styles = StyleSheet.create({
    .content {
        border-radius: 10px;
        margin-top: 10px;
        background-color: #cce5ff;
        display: flex;
        align-items: center;
        justify-content: space-between;
    } 
  })