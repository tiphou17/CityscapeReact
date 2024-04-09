import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HouseVideo = () => {
    return (
        <View style={styles.propertyDetailsItem}>
            <Text style={styles.title}>House</Text>
            <View style={styles.content}>
                <View style={styles.houseContent}>
                    <Image
                        source={require('../../../assets/images/thumbs/house.png')}
                        style={styles.image}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            // Ouvrir la vidéo dans une application externe
                            Linking.openURL('https://www.youtube.com/watch?v=pPl3ZZdTP3g');
                        }}
                        style={styles.videoButton}
                    >
                        <Text style={styles.videoIcon}>▶️</Text>
                    </TouchableOpacity>
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
    houseContent: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    videoButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -20 }, { translateY: -20 }], // Pour centrer le bouton
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoIcon: {
        color: '#fff',
        fontSize: 24,
    },
});

export default HouseVideo;