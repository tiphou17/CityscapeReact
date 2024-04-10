import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RecentPost = () => {
    return (
        <View style={styles.commonSidebar}>
            <Text style={styles.title}>Recent Post</Text>
            <View style={styles.latestBlog}>
                <TouchableOpacity onPress={() => navigateTo('')} style={styles.blogItem}>
                    <View style={styles.blogThumb}>
                        <Image
                            source={require('../../../assets/images/thumbs/latest-blog1.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.blogContent}>
                        <View style={styles.category}>
                            <Text style={styles.categoryIcon}>📁</Text>
                            <Text style={styles.categoryText}>Category</Text>
                        </View>
                        <Text style={styles.blogTitle}>A picture is worth standard and stand us return</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.latestBlog}>
                <TouchableOpacity onPress={() => navigateTo('')} style={styles.blogItem}>
                    <View style={styles.blogThumb}>
                        <Image
                            source={require('../../../assets/images/thumbs/latest-blog2.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.blogContent}>
                        <View style={styles.category}>
                            <Text style={styles.categoryIcon}>📁</Text>
                            <Text style={styles.categoryText}>Category</Text>
                        </View>
                        <Text style={styles.blogTitle}>Your journ homeownership starts here</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.latestBlog}>
                <TouchableOpacity onPress={() => navigateTo('')} style={styles.blogItem}>
                    <View style={styles.blogThumb}>
                        <Image
                            source={require('../../../assets/images/thumbs/latest-blog3.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.blogContent}>
                        <View style={styles.category}>
                            <Text style={styles.categoryIcon}>📁</Text>
                            <Text style={styles.categoryText}>Category</Text>
                        </View>
                        <Text style={styles.blogTitle}>Trust us to guide you the a through the process</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
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
    latestBlog: {
        marginBottom: 10,
    },
    blogItem: {
        flexDirection: 'row',
    },
    blogThumb: {
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    blogContent: {
        flex: 1,
    },
    category: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    categoryIcon: {
        marginRight: 5,
    },
    categoryText: {
        fontSize: 12,
    },
    blogTitle: {
        fontSize: 16,
    },
});

export default RecentPost;