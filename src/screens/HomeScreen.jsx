import {StyleSheet, Text, View, FlatList, Image, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPokemons} from '../components/pokemon/pokemonSlice';
import PokemonCard from '../components/PokemonCard';


export default function HomeScreen() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons.pokemon);
  // const pokemons = [];
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un Pokémon par son nom ou par son id"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <FlatList
        data={pokemons}
        renderItem={itemData => {
          return (
            <PokemonCard
              name={itemData.item.name}
              img={itemData.item.image}
              onPress={() =>
                navigation.navigate('PokemonDetailsScreen', {
                  pokemonId: itemData.item.id,
                })
              }
            />
          );
        }}
        keyExtractor={item => item.name}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listContainer: {
    alignItems: 'center',
  },
  pokemonContainer: {
    alignItems: 'center',
    margin: 5,
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
  pokemonName: {
    marginTop: 5,
    textAlign: 'center',
  },
});
