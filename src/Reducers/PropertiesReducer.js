import {
  PROPERTIES_FETCH_SUCCESS,
  PROPERTIES_FILTERED,
  PROPERTY_FETCH_SUCCESS,
  UPDATE_SEARCH_TERM,
  PROPERTIES_USREALESTATE,
  PROPERTY_USREALESTATE,
  SEARCH_LAT_LNG,
} from "../Actions/types";
import PropertiesService from '../Services/PropertiesServices';



const INITIAL_STATE = {
  list:[] ,
  listFiltered: [] ,
  propertiesUSRealEstate: [],
  propertyUSRealEstate: {},
  propertyId: "",
  loading: true,
  loadingProperty: true,
  searchTerm: "",
  searchLatLng: {},
  filtered: false,
 };

export default (state = INITIAL_STATE, action) => {
    properties = PropertiesService.getProperties()
    console.log(properties)
//mettre un console.log de action pour voir ce qu'il y a dedans
    switch (action.type) {
        case PROPERTIES_FILTERED:

            return {
                ...state,
                listFiltered: action.payload,
                filtered: true,
                loading: false
            };
        case PROPERTIES_FETCH_SUCCESS:
            return {
                ...state,
                list: PropertiesService.getProperties(),
                listFiltered: action.payload,
                loading: false,
            };

        case PROPERTY_FETCH_SUCCESS:
            return { ...state, propertyId: action.payload, loadingProperty: false };

        case PROPERTIES_USREALESTATE:
              return {
                ...state,
                propertiesUSRealEstate: action.payload,
                listFiltered: [],
                list: [],
              };
        case PROPERTY_USREALESTATE:
              return { ...state, propertyUSRealEstate: action.payload };

        case SEARCH_LAT_LNG:
              return { ...state, searchLatLng: action.payload };
        default:
              return state;
    }
};
