import React from 'react'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import PokemonDetailsScreen from './screens/PokemonDetailsScreen'
import MyCollectionScreen from './screens/MyCollectionScreen'
import store from './store'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PokemonDetails" component={PokemonDetailsScreen}/>
          {/* <Stack.Screen name="MyCollection" component={MyCollectionScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({});
