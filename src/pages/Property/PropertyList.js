import PropertyComponent from "../../components/PropertyList/PropertyList";
import Footer from "../../components/Footer/Footer";
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import PropertyDetailsPage from "../propertyDetails/propertyDetails";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();





const PropertyListPage = () => {
    setTimeout(() => {
                    SplashScreen.hideAsync();
                }, 3000);


    return (
        <View>
                <PropertyComponent />
                <Footer />
        </View>


    )
}

export default PropertyListPage;

