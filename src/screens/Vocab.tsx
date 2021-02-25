import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MenuTitle, NavBar} from '../../components';
import {colors, spacing, typography} from '../styles';
// import firestore from '@react-native-firebase/firestore';

// const vocabCollection = firestore()
//   .collection('Vocab')
//   .doc('N4KRiij6e6Wyjotd2AO5');

export const Vocab = ({navigation}) => {
  const handleXmas = () => {
    navigation.navigate('Christmas');
  };

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <NavBar />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Vocab screen</Text>
      </View>
      <View>
        <MenuTitle title={'Christmas'} onPress={handleXmas} />
        <MenuTitle title={'Holidays'} onPress={handleXmas} />
        <MenuTitle title={'Cooking'} onPress={handleXmas} />
        <MenuTitle title={'Familly'} onPress={handleXmas} />
        <MenuTitle title={'Birthdays'} onPress={handleXmas} />
        <MenuTitle title={'Sports'} onPress={handleXmas} />
        <MenuTitle title={'Colors'} onPress={handleXmas} />
      </View>
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
});
