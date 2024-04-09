import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';


import Footer from "./src/components/Footer/Footer";


const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="Footer" component={Footer} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}