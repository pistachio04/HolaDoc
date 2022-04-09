import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masukks dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    //justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 153,
  },
});
