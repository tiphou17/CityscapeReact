import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import GLOBALS from "../../Common/Globals"
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const PropertyComponent = () => {

    setTimeout(() => {
            SplashScreen.hideAsync();
        }, 3000);

    const [ getProperties, setProperties]= useState([]);

    useEffect(()=>{
        fetchProperties();
    },[]);

    const fetchProperties = () => {
        axios.get(`${GLOBALS.BASE_URL}/api/react`)
                 .then(

                    (response) => {
                    console.log(response.data[2])
                    setProperties(response.data)}
                 )
                 .catch(function (error) {
                   // handle error
                   console.log(error);
                 })

    }

    const test =({item}) => {
        return (
            <View >

                <View style={{ width: '100%', marginBottom: 20 }}>
                                        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
                                          <TouchableOpacity>
                                            <Image style={{ width: '100%', height: 200, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} source={{ uri: 'https://loremflickr.com/905/584/house'}} />
                                          </TouchableOpacity>
                                        </View>
                                        <View style={{ padding: 10 }}>
                                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                            <Text>8 Beds</Text>
                                            <Text>5 Baths</Text>
                                          </View>
                                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                            <Text>Price</Text>
                                            <Text> frais d'agence inclus </Text>
                                          </View>
                                          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                            <Text style={{ marginRight: 5 }}>Test2</Text>
                                            {/* Location information */}
                                          </View>
                                          <TouchableOpacity style={{ backgroundColor: '#ccc', padding: 10, borderRadius: 5, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', color: '#333' }}>Book Now</Text>
                                          </TouchableOpacity>
                                        </View>
                                        </View>
            </View>
        )
    }

    return (
    <View >
            <FlatList
                data={getProperties}
                keyExtractor={(item) => item.id.toString()}
                renderItem={test}

            />
            </View>


    )







};


export default PropertyComponent;