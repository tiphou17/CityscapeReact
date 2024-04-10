import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Features = () => {
    return (
            <View style={styles.propertyDetailsItem}>
                <Text style={styles.title}>Features</Text>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <View style={styles.checkListItem}>
                                <Text style={styles.icon}>•</Text>
                                <Text style={styles.text}>Dream Property Solutions</Text>
                            </View>
                            <View style={styles.checkListItem}>
                                <Text style={styles.icon}>•</Text>
                                <Text style={styles.text}>Secure Property Partners</Text>
                            </View>
                            <View style={styles.checkListItem}>
                                <Text style={styles.icon}>•</Text>
                                <Text style={styles.text}>Doors to Your Future</Text>
                            </View>
                        </View>
                        <View style={styles.col}>
                            <View style={styles.checkListItem}>
                                <Text style={styles.icon}>•</Text>
                                <Text style={styles.text}>Prestige Property Management</Text>
                            </View>
                            <View style={styles.checkListItem}>
                                <Text style={styles.icon}>•</Text>
                                <Text style={styles.text}>Global Real Estate Investments</Text>
                            </View>
                            <View style={styles.checkListItem}>
                                <Text style={styles.icon}>•</Text>
                                <Text style={styles.text}>Your Home with Experience</Text>
                            </View>
                        </View>
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
            marginBottom: 10,
        },
        row: {
            flexDirection: 'row',
        },
        col: {
            flex: 1,
        },
        checkListItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
        },
        icon: {
            marginRight: 10,
        },
        text: {
            fontSize: 16,
        },
    });

export default Features;