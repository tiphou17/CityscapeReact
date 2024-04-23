import axios from "axios";
import GLOBALS from "../Common/Globals"


const getProperties = () => {
axios.get(`${GLOBALS.BASE_URL}/api/react`)
 .then(function (response) {
   // handle success

   data = response.data[0].title
//   console.log(data);

   return response.data
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