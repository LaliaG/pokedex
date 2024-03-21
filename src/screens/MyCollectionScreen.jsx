import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'


export default function MyCollectionScreen() {
  const handleCapture = () => {
    // Simulation de la capture d'un Pokémon
    alert('Pokémon capturé avec succès!');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Pokémon Collection</Text>
      <PokedexDisplay />
      <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
        <Text style={styles.buttonText}>Capture Pokémon</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  captureButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})





 




// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'; // Import StyleSheet et TouchableOpacity
// import { useSelector } from 'react-redux';
// import PokemonListItem from '../components/PokemonListItem'; // Import PokemonListItem from components

// export default function MyCollectionScreen()  {
//   const capturedPokemons = useSelector(state => state.pokemons.capturedPokemons);

//   const handleCapture = () => {
//     // Simulation de la capture d'un Pokémon
//     alert('Pokémon capturé avec succès!');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>My Captured Pokémons</Text>
//       <FlatList
//         data={capturedPokemons}
//         renderItem={({ item }) => <PokemonListItem id={item} />} {/* Utilisation de PokemonListItem */}
//         keyExtractor={item => item.toString()}
//       />
//       <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
//         <Text style={styles.buttonText}>Capture Pokémon</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   captureButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });





