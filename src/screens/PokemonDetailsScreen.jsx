import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CaptureButton from '../components/CaptureButton'

export default function PokemonDetailsScreen({ navigation, route }) {
  const { pokemon } = route.params
  const capturedPokemons = useSelector(state => state.pokemons.capturedPokemons)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon Details Screen</Text>
      <CaptureButton pokemon={pokemon} /> {/* Utilisation de CaptureButton */}
      {capturedPokemons.includes(pokemon.id) && <Text style={styles.text}>This Pokémon is captured!</Text>}
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  text: {
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})




