import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SvgUri, Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Preview = ({property}) => {
    return (
            <View style={styles.propertyDetailsItem}>
                <Text style={styles.title}>Preview</Text>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <View style={styles.amenitiesContent}>
                               <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <Path d="M38.75 26.875H38.125V21.875C38.1241 21.2122 37.8605 20.5768 37.3918 20.1082C36.9232 19.6395 36.2878 19.3759 35.625 19.375V8.75C35.6241 8.08723 35.3605 7.45184 34.8918 6.98319C34.4232 6.51454 33.7878 6.25087 33.125 6.25H6.875C6.21223 6.25087 5.57684 6.51454 5.10819 6.98319C4.63954 7.45184 4.37587 8.08723 4.375 8.75V19.375C3.71223 19.3759 3.07684 19.6395 2.60819 20.1082C2.13954 20.5768 1.87587 21.2122 1.875 21.875V26.875H1.25C1.08424 26.875 0.925268 26.9408 0.808058 27.0581C0.690848 27.1753 0.625 27.3342 0.625 27.5V30C0.625 30.1658 0.690848 30.3247 0.808058 30.4419C0.925268 30.5592 1.08424 30.625 1.25 30.625H1.875V33.125C1.875 33.2908 1.94085 33.4497 2.05806 33.5669C2.17527 33.6842 2.33424 33.75 2.5 33.75H4.375C4.51945 33.7501 4.65945 33.7 4.77114 33.6084C4.88283 33.5168 4.9593 33.3893 4.9875 33.2477L5.5125 30.625H34.4875L35.0125 33.2477C35.0407 33.3893 35.1172 33.5168 35.2289 33.6084C35.3405 33.7 35.4805 33.7501 35.625 33.75H37.5C37.6658 33.75 37.8247 33.6842 37.9419 33.5669C38.0592 33.4497 38.125 33.2908 38.125 33.125V30.625H38.75C38.9158 30.625 39.0747 30.5592 39.1919 30.4419C39.3092 30.3247 39.375 30.1658 39.375 30V27.5C39.375 27.3342 39.3092 27.1753 39.1919 27.0581C39.0747 26.9408 38.9158 26.875 38.75 26.875ZM5.625 8.75C5.62543 8.41861 5.75727 8.10092 5.9916 7.8666C6.22592 7.63227 6.54361 7.50043 6.875 7.5H33.125C33.4564 7.50043 33.7741 7.63227 34.0084 7.8666C34.2427 8.10092 34.3746 8.41861 34.375 8.75V19.375H33.125V16.875C33.1241 16.2122 32.8605 15.5768 32.3918 15.1082C31.9232 14.6395 31.2878 14.3759 30.625 14.375H23.125C22.4622 14.3759 21.8268 14.6395 21.3582 15.1082C20.8895 15.5768 20.6259 16.2122 20.625 16.875V19.375H19.375V16.875C19.3741 16.2122 19.1105 15.5768 18.6418 15.1082C18.1732 14.6395 17.5378 14.3759 16.875 14.375H9.375C8.71222 14.3759 8.07684 14.6395 7.60819 15.1082C7.13954 15.5768 6.87587 16.2122 6.875 16.875V19.375H5.625V8.75ZM31.875 16.875V19.375H21.875V16.875C21.8754 16.5436 22.0073 16.2259 22.2416 15.9916C22.4759 15.7573 22.7936 15.6254 23.125 15.625H30.625C30.9564 15.6254 31.2741 15.7573 31.5084 15.9916C31.7427 16.2259 31.8746 16.5436 31.875 16.875ZM18.125 16.875V19.375H8.125V16.875C8.12543 16.5436 8.25727 16.2259 8.4916 15.9916C8.72592 15.7573 9.04361 15.6254 9.375 15.625H16.875C17.2064 15.6254 17.5241 15.7573 17.7584 15.9916C17.9927 16.2259 18.1246 16.5436 18.125 16.875ZM3.125 21.875C3.12543 21.5436 3.25727 21.2259 3.4916 20.9916C3.72592 20.7573 4.04361 20.6254 4.375 20.625H35.625C35.9564 20.6254 36.2741 20.7573 36.5084 20.9916C36.7427 21.2259 36.8746 21.5436 36.875 21.875V26.875H3.125V21.875ZM3.8625 32.5H3.125V30.625H4.2375L3.8625 32.5ZM36.875 32.5H36.1375L35.7625 30.625H36.875V32.5ZM38.125 29.375H1.875V28.125H38.125V29.375Z" fill="url(#paint0_linear_4024_1321)"/>
                               <Defs>
                               <LinearGradient id="paint0_linear_4024_1321" x1="0.641076" y1="20.0005" x2="39.3908" y2="20.0005" gradientUnits="userSpaceOnUse">
                               <Stop stop-color="#F69220"/>
                               <Stop offset="0.2863" stop-color="#F68E20"/>
                               <Stop offset="0.5401" stop-color="#F48421"/>
                               <Stop offset="0.7807" stop-color="#F37221"/>
                               <Stop offset="1" stop-color="#F05A22"/>
                               </LinearGradient>
                               </Defs>
                               </Svg>
{/*                             <SvgUri */}
{/*                             width="25%" */}
{/*                             height="25%" */}
{/*                             source={require('../../../assets/icons/amenities1.svg')} */}
{/*                           /> */}
                                <View style={styles.amenitiesContentInner}>
                                    <Text style={styles.text}>  Room</Text>
                                    <Text style={styles.subtitle}> {property.propNbSpaces} Room</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.col}>
                            <View style={styles.amenitiesContent}>
                            <Image source={require('../../../assets/images/icons/amenities2.svg')} style={styles.icon} />
                                <View style={styles.amenitiesContentInner}>
                                    <Text style={styles.text}>Bed</Text>
                                    <Text style={styles.subtitle}>{property.propNbBeds} Beds</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.col}>
                            <View style={styles.amenitiesContent}>
                                <Image source={require('../../../assets/images/icons/amenities3.svg')} style={styles.icon} />
                                <View style={styles.amenitiesContentInner}>
                                    <Text style={styles.text}>Bath</Text>
                                    <Text style={styles.subtitle}>{property.propNbBaths} Baths</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <View style={styles.amenitiesContent}>
                                <Image source={require('../../../assets/images/icons/amenities4.svg')} style={styles.icon} />
                                <View style={styles.amenitiesContentInner}>
                                    <Text style={styles.text}>Space</Text>
                                    <Text style={styles.subtitle}>{property.propNbSpaces} Space</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.col}>
                            <View style={styles.amenitiesContent}>
                                <Image source={require('../../../assets/images/icons/amenities5.svg')} style={styles.icon} />
                                <View style={styles.amenitiesContentInner}>
                                    <Text style={styles.text}>Size</Text>
                                    <Text style={styles.subtitle}>{property.propSqm} m2</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.col}>
                            <View style={styles.amenitiesContent}>
                                   <Image source={require('../../../assets/images/icons/amenities6.svg')} style={styles.icon} />
                                <View style={styles.amenitiesContentInner}>
                                    <Text style={styles.text}>Property Type</Text>
                                    <Text style={styles.subtitle}> {property.name}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    const styles = StyleSheet.create({
        propertyDetailsItem: {
            // Add styles for property-details-item container
        },
        title: {
            // Add styles for property-details-item__title
        },
        content: {
            // Add styles for property-details-item__content
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
        },
        col: {
            flex: 1,
            paddingHorizontal: 5,
        },
        amenitiesContent: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        icon: {
            width: 20,
            height: 20,
            marginRight: 5,
        },
        amenitiesContentInner: {
            flexDirection: 'column',
        },
        text: {
            fontSize: 16,
            color: 'black',
        },
        subtitle: {
            fontSize: 14,
            color: 'gray',
        },
    });

export default Preview;