
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Pictures = () => {
    return (
        <View style={styles.row}>
            <View style={[styles.col, styles.col6]}>
                <View style={styles.propertyDetailsThumb}>
                    <Image
                        source={require('../../../assets/images/thumbs/property-details-1.png')}
                        style={styles.coverImg}
                    />
                </View>
            </View>
            <View style={[styles.col, styles.col6]}>
                <View style={styles.propertyDetailsThumb}>
                    <Image
                        source={require('../../../assets/images/thumbs/property-details-2.png')}
                        style={styles.coverImg}
                    />
                </View>
            </View>
            <View style={[styles.col, styles.col6]}>
                <View style={styles.propertyDetailsThumb}>
                    <Image
                        source={require('../../../assets/images/thumbs/property-details-3.png')}
                        style={styles.coverImg}
                    />
                </View>
            </View>
            <View style={[styles.col, styles.col6]}>
                <View style={styles.propertyDetailsThumb}>
                    <Image
                        source={require('../../../assets/images/thumbs/property-details-4.png')}
                        style={styles.coverImg}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        flexWrap : 'wrap'
    },
    col: {
        flex: 1,
    },
    col12: {
        flexBasis: '100%',
    },
    col6: {
        flexBasis: '50%',
    },
    propertyDetailsThumb: {
        borderWidth: 1,
        borderColor: '#000', // Ajoutez votre couleur de bordure personnalisée ici
        borderRadius: 5,
        overflow: 'hidden',
    },
    coverImg: {
        width: '100%',
        height: 200, // Ajustez la hauteur selon vos besoins
    },
});

export default Pictures;