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
                <Text> {item.title} </Text>
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






//    var myloop = [];
//
//    for (let i = 0; i < 10; i++) {
//      myloop.push(
//        <View style={{ width: '100%', marginBottom: 20 }}>
//                        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
//                          <TouchableOpacity>
//                            <Image style={{ width: '100%', height: 200, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} source={{ uri: 'https://loremflickr.com/905/584/house'}} />
//                          </TouchableOpacity>
//                        </View>
//                        <View style={{ padding: 10 }}>
//                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Type de maison</Text>
//                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
//                            <Text>8 Beds</Text>
//                            <Text>5 Baths</Text>
//                          </View>
//                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
//                            <Text>Price</Text>
//                            <Text> frais d'agence inclus </Text>
//                          </View>
//                          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
//                            <Text style={{ marginRight: 5 }}>Test2</Text>
//                            {/* Location information */}
//                          </View>
//                          <TouchableOpacity style={{ backgroundColor: '#ccc', padding: 10, borderRadius: 5, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
//                            <Text style={{ fontWeight: 'bold', color: '#333' }}>Book Now</Text>
//                          </TouchableOpacity>
//                        </View>
//                      </View>
//      );
//    }
//
//
//
//  return (
//   <ScrollView style={{ backgroundColor: '#f0f0f0' }}>
//        <View style={{ paddingVertical: 120, paddingHorizontal: 20 }}>
//          <View style={{ marginBottom: 20 }}>
//              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
//                <View style={{ flex: 1, marginRight: 10 }}>
//                  <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
//                    <Picker
//                      style={{ flex: 1, height: 40, color: '#333' }}
//                      selectedValue={'Status'}
//                      onValueChange={(itemValue, itemIndex) => {}}
//                    >
//                      <Picker.Item label="Status" value="Status" enabled={false} />
//                      <Picker.Item label="All" value="All" />
//                      <Picker.Item label="Buy" value="Buy" />
//                      <Picker.Item label="Rent" value="Rent" />
//                    </Picker>
//                    <Image style={{ width: 20, height: 20, marginRight: 10 }} source={{ uri: 'your_image_url' }} />
//                  </View>
//                </View>
//                {/* Other columns go here */}
//              </View>
//              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                <Text style={{ fontSize: 18, color: '#333' }}>Showing 1-10 of 23</Text>
//                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                  <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 4 }}>
//                    <TouchableOpacity style={{ backgroundColor: '#ccc', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>
//                      <Text>Grid</Text>
//                    </TouchableOpacity>
//                    <TouchableOpacity style={{ backgroundColor: '#ccc', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>
//                      <Text>List</Text>
//                    </TouchableOpacity>
//                  </View>
//                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                    <Text style={{ fontSize: 18, color: '#333' }}>Sort by:</Text>
//                    <Picker
//                      style={{ height: 40, color: '#333', backgroundColor: 'transparent' }}
//                    >
//                      <Picker.Item label="Newest" value="Newest" />
//                      <Picker.Item label="Best Seller" value="Best Seller" />
//                      <Picker.Item label="Best Match" value="Best Match" />
//                      <Picker.Item label="Low Price" value="Low Price" />
//                      <Picker.Item label="High Price" value="High Price" />
//                    </Picker>
//                  </View>
//                </View>
//              </View>
//          </View>
//            {myloop}
//          <View>
//            {/* Pagination */}
//            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
//              <TouchableOpacity style={{ backgroundColor: '#ccc', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>
//                <Text>1</Text>
//              </TouchableOpacity>
//              <TouchableOpacity style={{ backgroundColor: '#ccc', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>
//                <Text>2</Text>
//              </TouchableOpacity>
//              <TouchableOpacity style={{ backgroundColor: '#ccc', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>
//                <Text>3</Text>
//              </TouchableOpacity>
//              {/* Add more page buttons as needed */}
//            </View>
//          </View>
//        </View>
//      </ScrollView>
//
//
//  );
};


export default PropertyComponent;