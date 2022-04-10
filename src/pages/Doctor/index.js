import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfiles,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <HomeProfiles />
        <Text style={styles.welcome}>
          Mau konsultasi dengan siapa hari ini?
        </Text>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Gap width={16} />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <Gap width={6} />
            </View>
          </ScrollView>
        </View>
        <Text style={styles.sectionLabel}>Top rated doctor</Text>
        <RatedDoctor />
        <RatedDoctor />
        <RatedDoctor />
        <Text style={styles.sectionLabel}>Good News</Text>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    paddingVertical: 30,
    paddingHorizontal: 16,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
