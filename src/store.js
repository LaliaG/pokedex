import { configureStore } from "@reduxjs/toolkit"
import pokemonReducer from "./components/pokemon/pokemonSlice"


export default configureStore({
    reducer: {
        pokemons: pokemonReducer
    }
})