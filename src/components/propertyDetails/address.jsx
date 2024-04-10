import React from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';

const Address = () => {
    return (
        <View style={styles.propertyDetailsItem}>
            <Text style={styles.title}>Address</Text>
            <View style={styles.content}>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <View style={styles.addressContent}>
                            <Text style={styles.text}>Address</Text>
                            <Text style={styles.titleContent}>Mirpur 1, Chineese</Text>
                        </View>
                    </View>
                    <View style={styles.col}>
                        <View style={styles.addressContent}>
                            <Text style={styles.text}>Code</Text>
                            <Text style={styles.titleContent}>2365</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.addressMap}>
{/*                 intégrer OSM ici */}
{/*                     <WebView */}
{/*                         source={{ uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1150112.1628856962!2d44.64619029447154!3d23.086651461779507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sbd!4v1707037970965!5m2!1sen!2sbd' }} */}
{/*                         style={styles.map} */}
{/*                     /> */}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    propertyDetailsItem: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    col: {
        flex: 1,
    },
    addressContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        marginRight: 8,
    },
    titleContent: {
        fontSize: 15,
    },
    addressMap: {
        height: 200,
    },
    map: {
        flex: 1,
    },
});

export default Address;