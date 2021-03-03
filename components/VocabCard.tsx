import React from 'react';
import {Text, View} from 'react-native';
import {spacing, colors} from '../src/styles';

const VocabCard = ({
  wordFrench,
  wordEnglish,
  sentenceFrench,
  sentenceEnglish,
}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: spacing.baseSmall,
        borderWidth: 1,
        borderColor: colors.black,
      }}>
      <Text style={{padding: spacing.small, paddingRight: spacing.base}}>
        {'<3'}
      </Text>
      <View>
        <Text>
          {wordFrench} <Text>{wordEnglish}</Text>{' '}
        </Text>
        <Text>{sentenceFrench}</Text>
        <Text>{sentenceEnglish}</Text>
      </View>
    </View>
  );
};

export {VocabCard};
