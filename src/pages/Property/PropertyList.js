import PropertyList from "../../components/PropertyList/PropertyList";
import Footer from "../../components/Footer/Footer";
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();



const PropertyListPage = ()=> {
    setTimeout(() => {
                SplashScreen.hideAsync();
            }, 3000);


    return (
        <View>
        <PropertyList />
        <Footer />
        </View>
    );

};

export default PropertyListPage;

