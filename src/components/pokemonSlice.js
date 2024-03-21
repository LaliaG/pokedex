import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async () => {
    const response = await axios.get(BASE_URL + "?limit=100");
    const data = await response.data.results;

    const pokemons = [];

    await Promise.all(
      data.map(async (pokemon) => {
        await axios.get(pokemon.url).then((response) => {
          pokemons.push(response.data);
        });
      })
    );

    console.log(pokemons);

    return pokemons;
  }
);

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (url) => {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
);

export const fetchType = createAsyncThunk("pokemon/fetchType", async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/type");
  const data = await response.data;

  return data.results;
});

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    pokedex: [],
    filteredPokemons: [],
    displayPokedex: false,
    types: [],
  },
  reducers: {
    addPokedex: (state, action) => {
      state.pokedex.push(action.payload);
    },
    changeDisplayPokedex: (state) => {
      state.displayPokedex = !state.displayPokedex;
    },
   
    setFilteredPokemons: (state, action) => {
      state.filteredPokemons = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
      state.filteredPokemons = action.payload;
    }),
      builder.addCase(fetchType.fulfilled, (state, action) => {
        state.types = action.payload;
      });
  },
});

export const {
  addPokedex,
  changeDisplayPokedex,
 
  setFilteredPokemons,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
