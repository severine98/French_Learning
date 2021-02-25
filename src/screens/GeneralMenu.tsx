import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MenuTitle, NavBar} from '../../components';
import {colors, spacing} from '../styles';

export const GeneralMenu = ({navigation}) => {
  const handleVocab = () => {
    navigation.navigate('Vocab');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar />
      <View style={styles.container}>
        <MenuTitle title={'VOCAB'} onPress={handleVocab} />
        <MenuTitle title={'VERBS'} onPress={handleVocab} />
        <MenuTitle title={'CONJUGATION'} onPress={handleVocab} />
        <MenuTitle title={'DICTIONARY'} onPress={handleVocab} />
        <MenuTitle title={'PROGRESS'} onPress={handleVocab} />
      </View>
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
