import PropertyList from "../../components/PropertyList/PropertyList";
import Footer from "../../components/Footer/Footer";
import { ScrollView } from 'react-native';

const PropertyListPage = ()=> {

    return (
        <ScrollView>
        <PropertyList />
        <Footer />
        </ScrollView>
    );

};

export default PropertyListPage;

