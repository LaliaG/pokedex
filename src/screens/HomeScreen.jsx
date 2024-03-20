import { StyleSheet, Text, View, FlatList, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function HomeScreen() {
    const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const filterPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderPokemonItem = ({ item }) => (
    <View style={styles.pokemonContainer}>
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.url.split('/')[6]}.png` }}
        style={styles.pokemonImage}
      />
      <Text style={styles.pokemonName}>{item.name}</Text>
    </View>
  )
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un Pokémon"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <FlatList
        data={filterPokemons}
        renderItem={renderPokemonItem}
        keyExtractor={item => item.name}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  )
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
})




