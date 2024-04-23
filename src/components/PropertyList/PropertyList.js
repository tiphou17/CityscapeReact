import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, FlatList, Button, ActivityIndicator, StatusBar} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import GLOBALS from "../../Common/Globals"
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation ,  NavigationContainer }  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

SplashScreen.preventAutoHideAsync();
const PropertyComponent = () => {
    const navigation = useNavigation();

    const [getProperties, setProperties]= useState([]);
    const [getRefresh, setRefresh]= useState( false );
    const [getCategory, setCategory]= useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    var fetchProperties = () => {
                    axios.get(`${GLOBALS.BASE_URL}/api/react?page=${currentPage}&limit=4`)
                             .then(

                                (response) => {
                                setProperties(response.data);
                                setIsLoading(false);
                                console.log(getCategory);}
                             )
                             .catch(function (error) {
                               // handle error
                               console.log(error);
                             })

                }


    if (getCategory === "Buy" ){
       var fetchProperties = () => {
                           axios.get(`${GLOBALS.BASE_URL}/api/react?page=${currentPage}&limit=1`)
                                    .then(

                                       (response) => {
                                       setProperties(response.data);
                                       setIsLoading(false);
                                       setRefresh('true');
                                       console.log(getCategory);}
                                    )
                                    .catch(function (error) {
                                      // handle error
                                      console.log(error);
                                    })
                           }


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
                             <Button
                                                            title="Book Now"
                                                            itemId= {item.id}
                                                            color="#F4821E"
                                                            onPress={() => navigation.navigate(
                                                                'PropertyDetails',

                                                                {itemId: item.id}
                                                                )}
                                                        />
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
                      <ScrollView style={{ backgroundColor: '#f0f0f0' }}>
                              <View style={{ paddingVertical: 120, paddingHorizontal: 20 }}>
                                <View style={{ marginBottom: 20 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                                      <View style={{ flex: 1, marginRight: 10 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
                                          <Picker
                                            style={{ flex: 1, height: 40, color: '#333' }}
                                            selectedValue={'All'}
                                            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                                          >
                                            <Picker.Item label="Status" value="Status" enabled={false} />
                                            <Picker.Item label="All" value="All" />
                                            <Picker.Item label="Buy" value="Buy" />
                                            <Picker.Item label="Rent" value="Rent" />
                                          </Picker>
                                          <Image style={{ width: 20, height: 20, marginRight: 10 }} source={{ uri: 'your_image_url' }} />
                                        </View>
                                      </View>
                                      {/* Other columns go here */}
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                      <Text style={{ fontSize: 18, color: '#333' }}>Showing 1-10 of 23</Text>
                                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 4 }}>
                                          <TouchableOpacity style={{ backgroundColor: '#ccc', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>
                                            <Text>Grid</Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity style={{ backgroundColor: '#ccc', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>
                                            <Text>List</Text>
                                          </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                          <Text style={{ fontSize: 18, color: '#333' }}>Sort by:</Text>
                                          <Picker
                                            style={{ height: 40, color: '#333', backgroundColor: 'transparent' }}
                                          >
                                            <Picker.Item label="Newest" value="Newest" />
                                            <Picker.Item label="Best Seller" value="Best Seller" />
                                            <Picker.Item label="Best Match" value="Best Match" />
                                            <Picker.Item label="Low Price" value="Low Price" />
                                            <Picker.Item label="High Price" value="High Price" />
                                          </Picker>
                                        </View>
                                      </View>
                                    </View>
                                </View>
                                <FlatList
                                       data={getProperties}
                                       extraData={getRefresh}
                                       keyExtractor={(item) => item.id}
                                       renderItem={test}
                                       ListFooterComponent={renderLoader}
                                       onEndReached={loadMoreItem}
                                       onEndReachedThreshold={0}
                                />

                              </View>
                            </ScrollView>


    )
};


export default PropertyComponent;