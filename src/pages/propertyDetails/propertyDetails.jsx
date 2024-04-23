import { ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Pictures from "../../components/propertyDetails/pictures";
import Preview from "../../components/propertyDetails/preview";
import Features from "../../components/propertyDetails/features";
import Address from "../../components/propertyDetails/address";
import HouseVideo from "../../components/propertyDetails/houseVideo";
import Category from "../../components/propertyDetails/category";
import RecentPost from "../../components/propertyDetails/recentPost";
import Properties from "../../components/propertyDetails/properties";
import Breadcrumb from "../../components/partials/breadcrumb";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import GLOBALS from "../../Common/Globals"
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation ,  NavigationContainer }  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const PropertyDetailsPage = ( { route } ) => {

setTimeout(() => {
            SplashScreen.hideAsync();
        }, 3000);

    const [ getProperty, setProperty]= useState([]);


const itemId = (route.params) ? route.params.itemId : 1;

    useEffect(()=>{
        fetchProperty();
    },[]);

    const fetchProperty = () => {



        axios.get(`${GLOBALS.BASE_URL}/api/react/${itemId}`)

                 .then(

                    (response) => {
                    console.log(response.data[0])
                    setProperty(response.data[0])}
                 )
                 .catch(function (error) {
                   // handle error
                   console.log(error);
                 })

    }

    return (
<>

    <Breadcrumb title="Property Details"/>

    <ScrollView>
{/* début sép 1 */}
        <Pictures />
{/* début ss séparation */}
        <Preview property= {getProperty}/>
        <Features />
        <Address />
        <HouseVideo />
{/* fin ss séparation */}
{/* fin sép 1 */}
{/* début sép 2 */}
        <Category />
        <RecentPost />
        <Properties />

{/* fin sép 2 */}
    <Footer />
    </ScrollView>

    </>

    );
};

export default PropertyDetailsPage;