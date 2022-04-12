import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profiles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar} />
      </View>
      <Text style={styles.name}>M. Sigid Prasetyo</Text>
      <Text style={styles.proffesion}>Mobile Developer</Text>
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {alignItems: 'center', justifyContent: 'center'},
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 16,
  },
  proffesion: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 2,
  },
});
