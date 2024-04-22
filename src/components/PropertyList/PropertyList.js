import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, FlatList, ActivityIndicator, StatusBar } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import GLOBALS from "../Common/Globals"
import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PropertyComponent = () => {

    const navigation = useNavigation();

    const [getProperties, setProperties]= useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const fetchProperties = () => {
        axios.get(`${GLOBALS.BASE_URL}/api/react?page=${currentPage}&limit=4`)
                 .then(

                    (response) => {
                    setProperties(response.data);
                    setIsLoading(false);}
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
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.propHousingType}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text> {item.propNbBeds} Beds</Text>
                            <Text> {item.propNbBaths} Baths</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                             <Text> {item.propPrice} </Text>
                             <Text> frais d'agence inclus </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                             <Text style={{ marginRight: 5 }}> {item.propSQM} m² </Text>
                             {/* Location information */}
                             </View>
                             <TouchableOpacity style={{ backgroundColor: '#ccc', padding: 10, borderRadius: 5, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate('PropertyDetails')} >
                             <Text style={{ fontWeight: 'bold', color: '#333' }}>Book Now</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const renderLoader = () => {
        return (
          isLoading ?
            <View style={{marginVertical: 16, alignItems: "center"}}>
              <ActivityIndicator size="large" color="#aaa" />
            </View> : null
        );
      };

      const loadMoreItem = () => {
          setCurrentPage(currentPage + 1);
        };

      useEffect(()=>{
             fetchProperties();
             LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
         },[currentPage]);

    return (

                      <FlatList
                         data={getProperties}
                          keyExtractor={(item) => item.id}
                          renderItem={test}
                          ListFooterComponent={renderLoader}
                          onEndReached={loadMoreItem}
                          onEndReachedThreshold={0}
                      />
    )
};


export default PropertyComponent;