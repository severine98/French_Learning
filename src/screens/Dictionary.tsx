import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DicCard, MenuTitle, NavBar} from '../../components';
import {colors, spacing} from '../styles';
import firebase from 'react-native-firebase';

export const Dictionary = ({navigation}) => {
  const [favWords, setFavWords] = useState();

  useEffect(() => {
    firebase
      .database()
      .ref('vocab')
      .once('value')
      .then((snapshot) => {
        setFavWords(snapshot.val().christmas);
      });
  }, []);

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <NavBar />
      <View style={styles.titleContainer}>
        <Text>DICTIONARY</Text>
        {Object.entries(favWords ?? {}).map((word) => {
          if (word[1].fav === true) {
            return (
              <DicCard
                sentenceEnglish={word[1].sentenceEnglish}
                sentenceFrench={word[1].sentenceFrench}
                wordFrench={word[1].wordFrench.replace('_', ' ')}
                wordEnglish={word[1].wordEnglish.replace('_', ' ')}
                addedToDictionary={word[1].fav}
              />
            );
          }
        })}
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
