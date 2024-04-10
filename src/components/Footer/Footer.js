import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.footerItem}>
              <View style={styles.footerItemLogo}>
                <Image source={{ uri: 'https://loremflickr.com/905/584/house'}} />
              </View>
              <Text style={styles.footerItemDesc}>It is a long established fact that a reader will be distracted</Text>
              <Text style={[styles.footerItemTitle, styles.mt4]}>Lets Work Together</Text>
              <View style={styles.row}>
                <View style={styles.col6}>
                  <View style={styles.contactInfo}>
                    <View style={styles.contactInfoIcon}>
                      <Text style={styles.contactInfoIconText}></Text>
                    </View>
                    <View style={styles.contactInfoContent}>
                      <Text style={styles.contactInfoText}>Address</Text>
                      <Text style={styles.contactInfoAddress}>66 Broklyant, New York India</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.col6}>
                  <View style={styles.contactInfo}>
                    <View style={styles.contactInfoIcon}>
                      <Text style={styles.contactInfoIconText}></Text>
                    </View>
                    <View style={styles.contactInfoContent}>
                      <Text style={styles.contactInfoText}>Phone Number</Text>
                      <Text style={styles.contactInfoAddress}>012 345 678 9101</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.colXl1}></View>
          <View style={styles.column}>
            <View style={styles.footerItem}>
              <Text style={styles.footerItemTitle}>Services</Text>
              <View style={styles.footerMenu}>
                <Text style={styles.footerMenuItem}><Text style={styles.footerMenuLink}>Reliable Rentals </Text></Text>
                <Text style={styles.footerMenuItem}><Text style={styles.footerMenuLink}>Golden Key Properties </Text></Text>
                <Text style={styles.footerMenuItem}><Text style={styles.footerMenuLink}>Swift Home Sales </Text></Text>
                <Text style={styles.footerMenuItem}><Text style={styles.footerMenuLink}>Elite Realty Services </Text></Text>
                <Text style={styles.footerMenuItem}><Text style={styles.footerMenuLink}>Dream Property Solutions </Text></Text>
              </View>
            </View>
          </View>
          <View style={styles.colXl1}></View>
          <View style={styles.column}>
            <View style={styles.footerItem}>
              <Text style={styles.footerItemTitle}>Our gallery</Text>
              <Text style={styles.footerItemDesc}>It is a long established fact that reader will be Elite Property</Text>
              <View style={styles.subscribeBox}>
                <View style={styles.inputGroup}>
                  <TextInput style={styles.formControl} placeholder="Your mail address" />
                  <TouchableOpacity style={styles.inputGroupText}><Text style={styles.textWhite}></Text></TouchableOpacity>
                </View>
              </View>
              <View style={styles.socialList}>
                <TouchableOpacity style={styles.socialListItem}><Text style={styles.socialListLink}></Text></TouchableOpacity>
                <TouchableOpacity style={styles.socialListItem}><Text style={styles.socialListLink}></Text></TouchableOpacity>
                <TouchableOpacity style={styles.socialListItem}><Text style={styles.socialListLink}></Text></TouchableOpacity>
                <TouchableOpacity style={styles.socialListItem}><Text style={styles.socialListLink}></Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomFooter}>
        <View style={styles.container}>
          <View style={[styles.bottomFooterInner, styles.flxBetween]}>
            <Text style={styles.bottomFooterText}>&copy; CityScape 2024 | All Rights Reserved.</Text>
            <View style={styles.footerLinks}>
              <TouchableOpacity style={styles.footerLink}><Text style={styles.textWhite}>Terms & Condition</Text></TouchableOpacity>
              <TouchableOpacity style={styles.footerLink}><Text style={styles.textWhite}>Privacy Policy</Text></TouchableOpacity>
              <TouchableOpacity style={styles.footerLink}><Text style={styles.textWhite}>Contact Us</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  footer: { paddingY: 120 },
  container: { paddingHorizontal: 15 },
  row: { flexDirection: 'row' },
  column: { flex: 1 },
  footerItem: { marginBottom: 20 },
  footerItemLogo: { marginBottom: 10 },
  footerItemDesc: { color: '#000' },
  footerItemTitle: { color: '#000', marginTop: 40 },
  mt4: { marginTop: 20 },
  col6: { flex: 0.5 },
  contactInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  contactInfoIcon: { marginRight: 10 },
  contactInfoIconText: { color: '#000' },
  contactInfoContent: { flex: 1 },
  contactInfoText: { color: '#000' },
  contactInfoAddress: { color: '#000' },
  footerMenu: { marginLeft: 15 },
  footerMenuItem: { marginBottom: 10 },
  footerMenuLink: { color: '#000' },
  subscribeBox: { marginTop: 20 },
  inputGroup: { flexDirection: 'row', alignItems: 'center', marginTop: 50 },
  formControl: { flex: 1, color: '#fff' },
  inputGroupText: { paddingHorizontal: 15, backgroundColor: 'blue' },
  textWhite: { color: '#fff' },
  socialList: { flexDirection: 'row' },
  socialListItem: { marginRight: 10 },
  socialListLink: { color: '#fff' },
  bottomFooter: { backgroundColor: '#000' },
  bottomFooterInner: { paddingVertical: 15 },
  flxBetween: { justifyContent: 'space-between' },
  bottomFooterText: { color: '#fff' },
  footerLinks: { flexDirection: 'row' },
  footerLink: { marginRight: 10 },
};

export default Footer;
