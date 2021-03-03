import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Heart} from '../assets/icons';
import {spacing, colors} from '../src/styles';

const VocabCard = ({
  wordFrench,
  wordEnglish,
  sentenceFrench,
  sentenceEnglish,
}: any) => {
  return (
    <View style={styles.container}>
      <Heart />
      {/* <Text style={{padding: spacing.small, paddingRight: spacing.base}}>
        {'<3'}
      </Text> */}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: spacing.baseSmall,
    borderWidth: 1,
    borderColor: colors.blue,
    backgroundColor: colors.white,
  },
});

export {VocabCard};
