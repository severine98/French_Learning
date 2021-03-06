import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import firebase from 'react-native-firebase';
import RNPickerSelect, {Item} from 'react-native-picker-select';
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
      .ref('vocab')
      .once('value')
      .then((snapshot) => {
        setVocabList(snapshot.val().christmas);
      });
  }, []);

  const itemsArray: Item[] = [];

  useEffect(() => {
    Object.entries(vocabList ?? {}).map((word) => {
      const singleWord = word[0];
      itemsArray.push({label: singleWord, value: singleWord});
      return itemsArray;
    });
  }, [itemsArray, vocabList]);

  return (
    <View
      style={{
        marginVertical: spacing.base,
        paddingLeft: spacing.base,
      }}>
      <Text
        style={{
          color: colors.blue,
        }}>
        {word.toUpperCase()}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text>{firstHalf}</Text>
        <RNPickerSelect
          onValueChange={(value) => handleChange(value, word)}
          placeholder={{label: 'Select Answer', value: null}}
          items={itemsArray}
        />
        <Text>{secondHalf}</Text>
      </View>
      <Text
        style={{
          color: colors.red,
        }}>
        {sentence}
      </Text>
    </View>
  );
};

export {TestCard};
