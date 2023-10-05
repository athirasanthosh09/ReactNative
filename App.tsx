import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CitiesScreen from './src/screens/CitiesScreen';
import PlaceDetailsScreen from './src/screens/PlaceDetailsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cities">
        <Stack.Screen name="Cities" component={CitiesScreen} options={{ title: 'List of Cities' }} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetailsScreen} options={{ title: 'Place Details' }} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favorites' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
