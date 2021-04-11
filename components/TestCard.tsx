/* eslint-disable no-inline-styles/no-inline-styles */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import firebase from 'react-native-firebase';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, spacing} from '../src/styles';

type TestCardProp = {
  word: string;
  sentence: any;
  handleChange: any;
};

const TestCard = ({word, sentence, handleChange}: TestCardProp) => {
  const indexOfWordInSentence = sentence.indexOf(word);
  const wordLength = word.length;
  const stringArray = sentence.split('');
  const [vocabList, setVocabList] = useState(null);
  const firstHalf = stringArray.splice(0, indexOfWordInSentence);
  const secondHalf = stringArray.splice(wordLength);

  useEffect(() => {
    firebase
      .database()
      .ref('test')
      .once('value')
      .then((snapshot) => {
        setVocabList(snapshot.val().christmas);
      });
  }, []);

  const shuffleArray = (array) => {
    // The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const itemsArray: Item[] = [];
  const shuffledArray = shuffleArray(itemsArray);

  useEffect(() => {
    Object.entries(vocabList ?? {}).map((word) => {
      const singleWord = word[0].replace('_', ' ');
      itemsArray.push({label: singleWord, value: singleWord});
      return itemsArray;
    });
    shuffleArray(itemsArray);
  }, [itemsArray, vocabList, shuffledArray]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginVertical: spacing.base,
        paddingHorizontal: spacing.base,
      }}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text>{firstHalf}</Text>
        <View>
          <RNPickerSelect
            onValueChange={(value) => {
              handleChange(value, word);
            }}
            placeholder={{label: 'Select Answer', value: null}}
            items={shuffledArray}
          />
        </View>
        <Text>{secondHalf}</Text>
      </View>

      <View
        style={{
          borderBottomColor: colors.green,
          borderBottomWidth: 2,
          paddingTop: spacing.base,
        }}
      />
    </SafeAreaView>
  );
};

export {TestCard};
