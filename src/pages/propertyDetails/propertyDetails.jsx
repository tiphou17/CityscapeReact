import { ScrollView } from 'react-native';
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
// import Login from "../../components/home/test";




const PropertyDetailsPage = () => {
    return (
<>

    <Breadcrumb title="Property Details"/>

    <ScrollView>
{/* début sép 1 */}
        <Pictures />
{/* début ss séparation */}
        <Preview />
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