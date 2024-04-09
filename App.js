import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import RecentPost from "./src/components/propertyDetails/recentPost";
import PropertyDetailsPage from "./src/pages/propertyDetails/propertyDetails";


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

              <Stack.Screen
                name="Home"
                component={PropertyDetailsPage}
                options={{title: 'Property Details'}}
              />

            </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




