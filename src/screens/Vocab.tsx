import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MenuTitle, NavBar} from '../../components';
import {colors, spacing} from '../styles';
// import firestore from '@react-native-firebase/firestore';

export const Vocab = ({navigation}) => {
  const handleVocab = (category: string) => {
    navigation.navigate('Christmas', {category});
  };

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <NavBar />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Vocab screen</Text>
      </View>
      <View>
        <MenuTitle
          title={'Christmas'}
          onPress={() => handleVocab('christmas')}
        />
        <MenuTitle title={'Holidays'} onPress={handleVocab} />
        <MenuTitle title={'Cooking'} onPress={handleVocab} />
        <MenuTitle title={'Familly'} onPress={handleVocab} />
        <MenuTitle title={'Birthdays'} onPress={handleVocab} />
        <MenuTitle title={'Sports'} onPress={handleVocab} />
        <MenuTitle title={'Colors'} onPress={() => handleVocab('colors')} />
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
