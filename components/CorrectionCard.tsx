/* eslint-disable no-inline-styles/no-inline-styles */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import firebase from 'react-native-firebase';
import {Item} from 'react-native-picker-select';
import {SafeAreaView} from 'react-native-safe-area-context';
import {answersArray} from '../src/screens/VocabTest';
import {colors, spacing} from '../src/styles';

type TestCardProp = {
  word: string;
  sentence: any;
  point: boolean;
};

const CorrectionCard = ({word, sentence, point}: TestCardProp) => {
  const indexOfWordInSentence = sentence.indexOf(word);
  const wordLength = word.length;
  const stringArray = sentence.split('');
  const [vocabList, setVocabList] = useState(null);
  const firstHalf = stringArray.splice(0, indexOfWordInSentence);
  const secondHalf = stringArray.splice(wordLength);

  let userAnswer;

  answersArray.forEach((item) => {
    if (item[word]) {
      userAnswer = item[word];
    }
  });

  console.log('userAnswer', userAnswer);

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

  // WANT TO COMPARE THE WORD WITH THE INPUT => IF IT MATCHES THEN SHOW THE WORD IN GREEN
  // IF NOT, SHOW THE WORD IN RED

  if (point) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: spacing.base,
          paddingVertical: spacing.small,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '90%',
            }}>
            <Text>{firstHalf}</Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: colors.green,
              }}>
              {word}
            </Text>
            <Text>{secondHalf}</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text>✔</Text>
          </View>
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
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginVertical: spacing.small,
        paddingHorizontal: spacing.base,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: spacing.base,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '90%',
          }}>
          <Text>{firstHalf}</Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: colors.red,
            }}>
            {userAnswer ?? '...'}
          </Text>
          <Text>{secondHalf}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Text>✘</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <Text>{firstHalf}</Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: colors.green,
            }}>
            {word}
          </Text>
          <Text>{secondHalf}</Text>
        </View>
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

export {CorrectionCard};
