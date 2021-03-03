import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import firebase from 'react-native-firebase';
import {ScrollView} from 'react-native-gesture-handler';
import {NavBar, VocabCard} from '../../components';
import {colors, spacing} from '../styles';

export const Christmas = ({navigation}) => {
  const [frenchWord, setFrenchWord] = useState();

  const handleTest = () => {
    console.log('HANDLE TEST');
    // navigation.navigate('VocabTest', {word: christmas});
  };

  useEffect(() => {
    firebase
      .database()
      .ref('vocab')
      .once('value')
      .then((snapshot) => {
        setFrenchWord(snapshot.val().christmas);
      });
  }, []);

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <NavBar />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Christmas vocab</Text>
        {Object.entries(frenchWord ?? {}).map((word) => {
          return (
            <VocabCard
              sentenceEnglish={word[1].sentenceEnglish}
              sentenceFrench={word[1].sentenceFrench}
              wordFrench={word[1].wordFrench}
              wordEnglish={word[1].wordEnglish}
            />
          );
        })}
        <TouchableOpacity
          style={{backgroundColor: colors.white}}
          onPress={handleTest}>
          <Text style={{textAlign: 'center', padding: spacing.base}}>
            Take the test
          </Text>
        </TouchableOpacity>
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
