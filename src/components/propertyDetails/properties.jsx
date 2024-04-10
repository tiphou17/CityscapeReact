import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Properties = () => {
    return (
        <View style={styles.commonSidebar}>
            <Text style={styles.title}>Properties</Text>
            <View style={styles.propertyContainer}>
                <TouchableOpacity onPress={() => handlePress('property.html')} style={styles.propertyItem}>
                    <Image
                        source={require('../../../assets/images/thumbs/properties-1.png')}
                        style={styles.propertyImage}
                    />
                    <Text style={styles.propertyText}>Relax House</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('property.html')} style={styles.propertyItem}>
                    <Image
                        source={require('../../../assets/images/thumbs/properties-2.png')}
                        style={styles.propertyImage}
                    />
                    <Text style={styles.propertyText}>Hunting Adventure</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('property.html')} style={styles.propertyItem}>
                    <Image
                        source={require('../../../assets/images/thumbs/properties-3.png')}
                        style={styles.propertyImage}
                    />
                    <Text style={styles.propertyText}>Homeowner ship</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('property.html')} style={styles.propertyItem}>
                    <Image
                        source={require('../../../assets/images/thumbs/properties-4.png')}
                        style={styles.propertyImage}
                    />
                    <Text style={styles.propertyText}>Real Dreams</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('property.html')} style={styles.propertyItem}>
                    <Image
                        source={require('../../../assets/images/thumbs/properties-5.png')}
                        style={styles.propertyImage}
                    />
                    <Text style={styles.propertyText}>New Doors</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('property.html')} style={styles.propertyItem}>
                    <Image
                        source={require('../../../assets/images/thumbs/properties-6.png')}
                        style={styles.propertyImage}
                    />
                    <Text style={styles.propertyText}>The Heart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const handlePress = (link) => {
    // Gérer la navigation ici
};

const styles = StyleSheet.create({
    commonSidebar: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    propertyContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    propertyItem: {
        width: '48%', // Pour 2 éléments par ligne, ajustez selon vos besoins
        marginBottom: 10,
    },
    propertyImage: {
        width: '100%', // Ajustez selon vos besoins
        height: 150, // Ajustez selon vos besoins
        resizeMode: 'cover',
        marginBottom: 5,
    },
    propertyText: {
        textAlign: 'center',
    },
});

export default Properties;
