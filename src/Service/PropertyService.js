import axios from "axios";
import GLOBALS from "../components/Common/Globals";

const getProperties = () => {
axios.get(`${GLOBALS.BASE_URL}/api/react`)
 .then(function (response) {
   // handle success
   console.log(JSON.stringify(response, null, 4));
 })
 .catch(function (error) {
   // handle error
   console.log(error);
 })
}

const PropertiesService = {
  getProperties
};

export default PropertiesService;