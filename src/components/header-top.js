import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function HeaderTop() {
  return (
    <View style={styles.headerTop}>
      <View style={styles.itemContainer}>
        <FontAwesomeIcon icon={faPhone} style={styles.icon} />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.text}>(629) 555-0129</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainer}>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
        <Text style={styles.text}>6391 Elgin St. Celina, 10299</Text>
      </View>

      <View style={styles.itemContainer}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.text}>info@example.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: 'column',
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
    color: '#000'
  },
  text: {
    color: '#000'
  },
});
