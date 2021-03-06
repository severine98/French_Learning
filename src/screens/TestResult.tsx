import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NavBar} from '../../components';
import {colors, spacing} from '../styles';
// import firestore from '@react-native-firebase/firestore';

export const TestResult = ({navigation, route}) => {
  const {score} = route?.params;

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <NavBar />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Test Results!!</Text>
      </View>
      <Text style={[styles.text, {color: colors.red, fontSize: 30}]}>
        You scored {score ?? 0} / 10
      </Text>
      <Text style={styles.text}>Try again?</Text>
      <Text style={styles.text}>Go back to the vocab</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: colors.white,
    textAlign: 'center',
    padding: spacing.base,
  },
  titleContainer: {
    backgroundColor: colors.green,
    marginBottom: spacing.large,
  },
  text: {
    paddingVertical: spacing.base,
    textAlign: 'center',
  },
});
