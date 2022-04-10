import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfiles = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>M. Sigid Prasetyo</Text>
        <Text style={styles.profession}>Mobile Developer</Text>
      </View>
    </View>
  );
};

export default HomeProfiles;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
