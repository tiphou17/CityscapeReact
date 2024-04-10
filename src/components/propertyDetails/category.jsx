import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Category = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Category</Text>
            <View style={styles.categoryList}>
                <TouchableOpacity onPress={() => navigateTo('blog-classic.html')} style={styles.categoryItem}>
                    <View style={styles.categoryLink}>
                        <Text style={styles.text}>Prime Investments</Text>
                        <Text style={styles.number}>(1)</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateTo('blog-classic.html')} style={styles.categoryItem}>
                    <View style={styles.categoryLink}>
                        <Text style={styles.text}>ProHome Finders</Text>
                        <Text style={styles.number}>(8)</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateTo('blog-classic.html')} style={styles.categoryItem}>
                    <View style={styles.categoryLink}>
                        <Text style={styles.text}>SmartHouse Agency</Text>
                        <Text style={styles.number}>(3)</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateTo('blog-classic.html')} style={styles.categoryItem}>
                    <View style={styles.categoryLink}>
                        <Text style={styles.text}>Secure Property Partners</Text>
                        <Text style={styles.number}>(5)</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    categoryList: {
        paddingHorizontal: 10,
    },
    categoryItem: {
        marginBottom: 10,
    },
    categoryLink: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
    number: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Category;