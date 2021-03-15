import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Heart} from '../assets/icons';
import {colors, spacing} from '../src/styles';

const VocabCard = ({
  wordFrench,
  wordEnglish,
  sentenceFrench,
  sentenceEnglish,
}: any) => {
  const isWordFeminine = wordFrench.split(' ').includes('La', 'Une');
  return (
    <SafeAreaView style={styles.container}>
      <Heart />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: spacing.baseSmall,
          }}>
          <Text
            style={[
              styles.wordFrench,
              {color: isWordFeminine ? colors.red : colors.blue},
            ]}>
            {wordFrench}
          </Text>
          <Text style={styles.wordEnglish}>{wordEnglish}</Text>
        </View>

        <Text style={styles.sentenceFrench}>{sentenceFrench}</Text>
        <Text style={styles.sentenceEnglish}>{sentenceEnglish}</Text>
      </View>
    </SafeAreaView>
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
    color: colors.blue,
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

export {VocabCard};
