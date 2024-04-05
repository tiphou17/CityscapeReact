import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import PropertyList from "./src/components/PropertyList/PropertyList";


const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="PropertyList" component={PropertyList} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}