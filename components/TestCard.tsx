import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, spacing} from '../src/styles';

type TestCardProp = {
  word: string;
  sentence: any;
};

const Componenent = () => {
  return <Text>HELLO</Text>;
};

const TestCard = ({word, sentence}: TestCardProp) => {
  const indexOfWordInSentence = sentence.indexOf(word);
  const wordLength = word.length;
  const stringArray = sentence.split('');

  const firstHalf = stringArray.splice(0, indexOfWordInSentence);
  const secondHalf = stringArray.splice(wordLength);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.blue,
    backgroundColor: colors.white,
  },
  wordEnglish: {
    fontWeight: 'bold',
    color: colors.black,
    fontStyle: 'italic',
    fontSize: 15,
  },
  wordFrench: {
    fontWeight: 'bold',
    color: colors.red,
    fontSize: 20,
  },
  sentenceEnglish: {
    color: colors.black,
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: spacing.small,
  },
  sentenceFrench: {
    color: colors.red,
    fontSize: 15,
    paddingVertical: spacing.small,
  },
});

export {TestCard};
