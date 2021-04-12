import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import firebase from 'react-native-firebase';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavBar, VocabCard} from '../../components';
import {colors, spacing} from '../styles';

export const Christmas = ({navigation, route}) => {
  const {category} = route?.params;
  const [frenchWord, setFrenchWord] = useState();
  const [test, setTest] = useState();

  useEffect(() => {
    firebase
      .database()
      .ref('vocab')
      .once('value')
      .then((snapshot) => {
        setFrenchWord(snapshot.val()[category]);
      });
  }, [category]);

  useEffect(() => {
    firebase
      .database()
      .ref('test')
      .once('value')
      .then((snapshot) => {
        setTest(snapshot.val()[category]);
      });
  }, [category]);

  const handleTest = () => {
    navigation.navigate('VocabTest', {content: test, category});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar />
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{category.toUpperCase()} vocab</Text>
          {Object.entries(frenchWord ?? {}).map((word) => {
            return (
              <VocabCard
                sentenceEnglish={word[1].sentenceEnglish}
                sentenceFrench={word[1].sentenceFrench}
                wordFrench={word[1].wordFrench.replace('_', ' ')}
                wordEnglish={word[1].wordEnglish.replace('_', ' ')}
                addedToDictionary={word[1].fav}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: colors.green,
    marginBottom: spacing.large,
  },
  title: {
    fontSize: 30,
    color: colors.white,
    textAlign: 'center',
    padding: spacing.base,
  },
});
