import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import PropertyList from "./src/components/PropertyList/PropertyList";
import CTA from "./src/components/CTA/CTA";


const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="PropertyList" component={PropertyList} />
      <Stack.Screen name="CTA" component={CTA} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}