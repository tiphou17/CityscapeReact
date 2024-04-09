

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Breadcrumb = props => {
  return (
    <View style={styles.breadcrumb}>
{/*       <Image */}
{/*         source={require('../../../assets/images/thumbs/breadcrumb-img.png')} */}
{/*         style={styles.breadcrumbImg} */}
{/*       /> */}
      <View >
        <View style={styles.row}>
          <View >
            <View style={styles.breadcrumbWrapper}>
              <Text style={styles.title}>{props.title}</Text>
              <View style={styles.list}>
                <View style={styles.item}>
                  <Text style={styles.link}><Text style={styles.homeIcon}>🏠</Text> Home</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.angleRightIcon}>›</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.itemText}r>{props.title}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  breadcrumb: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  breadcrumbImg: {
    // Styles for the image
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  col: {
    flex: 1,
  },
  colLg8: {
    flex: 0.8,
  },
  breadcrumbWrapper: {
    // Styles for breadcrumb wrapper
  },
  title: {
    // Styles for breadcrumb title
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    // Styles for each breadcrumb item
  },
  link: {
    // Styles for breadcrumb link
  },
  homeIcon: {
    // Styles for home icon
  },
  angleRightIcon: {
    // Styles for angle right icon
  },
  itemText: {
    // Styles for breadcrumb item text
  },
});



export default Breadcrumb;