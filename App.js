

import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home';
import PropertyList from './src/pages/Property/PropertyList';
import PropertyDetailsPage from "./src/pages/propertyDetails/propertyDetails";
import Contact from './src/pages/contact';
import Stylesheets from './src/styles/style';
import PropertiesService from './src/Services/PropertiesServices';
import PropertiesReducer from './src/Reducers/PropertiesReducer';
import { Provider } from "react-redux";
//import {  } from "native-base";
import { NativeBaseProvider, configureStore } from "@reduxjs/toolkit";
import * as SplashScreen from 'expo-splash-screen';
import * as Sentry from '@sentry/react-native';

//console.log(PropertiesService.getProperties())

// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();



//PropertiesService.getProperties();

const Stack = createNativeStackNavigator();


const App = () => {
    setTimeout(() => {
            SplashScreen.hideAsync();
        }, 3000);

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Properties" component={PropertyList} />
        <Stack.Screen name="PropertyDetails" component={PropertyDetailsPage}/>
        <Stack.Screen name="Contact" component={Contact}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

