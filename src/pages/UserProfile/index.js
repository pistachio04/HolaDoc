import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gap, Header, List, Profile} from '../../components';
import {colors} from '../../utils';

const UserProfile = () => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Gap height={10} />
      <Profile />
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last update"
        type="next"
        icon="edit-profile"
      />
      <List
        name="Edit Profile"
        desc="Last update"
        type="next"
        icon="language"
      />
      <List name="Edit Profile" desc="Last update" type="next" icon="rate" />
      <List name="Edit Profile" desc="Last update" type="next" icon="help" />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
