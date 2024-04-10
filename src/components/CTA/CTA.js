import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

const CtaSection = () => {
  return (
    <View style={{paddingVertical: 120}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16}}>
        <View style={{flex: 1, paddingRight: 16}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
            Subscribe To Our <Text style={{}}>Newsletter</Text>
          </Text>
          <Text style={{marginBottom: 20}}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
            <View style={{position: 'relative', flex: 1, marginRight: 10}}>
              <TextInput
                style={{borderWidth: 1, borderColor: '#000', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 8, width: '100%'}}
                placeholder="Enter Your Email Address"
              />
              <Text style={{position: 'absolute', left: 10, top: '50%', transform: [{ translateY: -12 }], color: '#000', fontSize: 20}}>
              </Text>
            </View>
            <TouchableOpacity style={{backgroundColor: '#000', borderRadius: 5, paddingHorizontal: 20, paddingVertical: 10}}>
              <Text style={{color: '#fff', textTransform: 'uppercase', fontSize: 16}}>Subscribe <Text style={{fontSize: 14}}>Now</Text></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{display: 'none'}}>
          <Image
            source={{ uri: 'https://loremflickr.com/905/584/house'}}
            style={{width: '100%', height: 'auto'}}
          />
        </View>
      </View>
    </View>
  );
};

export default CtaSection;
