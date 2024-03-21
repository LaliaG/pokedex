import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PokemonCard = ({}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` }}
        style={styles.image}
      />
      <Text style={styles.name}>#{pokemon.id} - {pokemon.name}</Text>
    </Pressable>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
  },

})