import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MenuTitle, NavBar} from '../../components';
import {colors, spacing} from '../styles';

export const VocabTest = ({navigation, route}) => {
  const word = route.params;

  console.log(word.cadeau);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar />
      <View style={styles.container}>{/* <Text></Text> */}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
