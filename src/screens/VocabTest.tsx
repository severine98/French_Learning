import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MenuTitle, NavBar, TestCard} from '../../components';
import {colors, spacing} from '../styles';

const json = {
  Père_Noël: 'As-tu déjà rencontré le Père Noël?',
  cadeau: 'Les cadeaux sont sous le sapin!',
  dinde: 'La dinde prend du temps à cuire',
};

export const VocabTest = ({navigation, route}) => {
  const content = route?.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar />
      {Object.entries(json).map((word) => {
        return (
          <>
            <TestCard word={word[0].replace('_', ' ')} sentence={word[1]} />
          </>
        );
      })}
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
