

import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home';
import PropertyList from './src/pages/Property/PropertyList';
import PropertyDetailsPage from "./src/pages/propertyDetails/propertyDetails";
import Contact from './src/pages/contact';
import Stylesheets from './src/styles/style';



const Stack = createStackNavigator();



const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Properties" component={PropertyList}/>
        <Stack.Screen name="PropertyDetails" component={PropertyDetailsPage}/>
        <Stack.Screen name="Contact" component={Contact}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

