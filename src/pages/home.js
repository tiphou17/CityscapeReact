import * as React from 'react';
import { Text, View } from 'react-native';
import NavBar from './../components/nav-bar';
import HeaderTop from './../components/header-top'
import Landing from '../components/home/landing';

export default function Home (){
    return(
        <View style={{ flex: 1 }}>
            <HeaderTop></HeaderTop>
            {/* <Landing></Landing>*/}
            <Text>Test from the home</Text>
            <NavBar></NavBar>
        </View>
    )
}