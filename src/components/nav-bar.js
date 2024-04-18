import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {
    const navigation = useNavigation();

    return (
        <View style={styles.navContainer}>
            <Button
                title="Accueil"
                color="#F4821E"
                onPress={() => navigation.navigate('Home')}
            />
            <View style={styles.separator} />
            <Button
                title="Propriétés"
                color="#F4821E"
                onPress={() => navigation.navigate('Properties')}
            />
            <View style={styles.separator} />
            <Button
                title="Contact"
                color="#F4821E"
                onPress={() => navigation.navigate('Contact')}
            />
            <Button
                            title="PropertyDetails"
                            color="#F4821E"
                            onPress={() => navigation.navigate('PropertyDetailsPage')}
                        />
        </View>
    );
}

const styles = StyleSheet.create({
    navContainer: {
        zIndex: 99,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FEFDFD',
    },
    separator: {
        backgroundColor: '#F4821E',
        height: '65%',
        width: 2,
    },
});
