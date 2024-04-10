import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';


import PropertyListPage from "./src/pages/Property/PropertyList";


const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="PropertyListPage" component={PropertyListPage} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}