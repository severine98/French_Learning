import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MenuTitle, NavBar} from '../../components';
import {colors, spacing, typography} from '../styles';

type FrenchVocab = {
  wordFrench: string;
  wordEnglish: string;
  sentenceFrench: string;
  sentenceEnglish: string;
};

const vocab: FrenchVocab[] = [
  {
    wordFrench: 'Le Noel',
    wordEnglish: 'Christmas',
    sentenceFrench: "C'est le jour de Noel",
    sentenceEnglish: "It's Christmas day",
  },
  {
    wordFrench: 'Le Cadeau',
    wordEnglish: 'Present',
    sentenceFrench: "J'ai recu un cadeau",
    sentenceEnglish: 'I received a present',
  },
  {
    wordFrench: 'La Dinde',
    wordEnglish: 'Turkey',
    sentenceFrench: 'Vas-tu manger de la dinde le 25?',
    sentenceEnglish: 'Are you going to have some turkey on the 25th?',
  },
  {
    wordFrench: 'Le Sapin de Noel',
    wordEnglish: 'Christmas tree',
    sentenceFrench: 'Nous devons acheter un sapin de noel ',
    sentenceEnglish: 'We need to buy a chritsmas tree',
  },
  {
    wordFrench: 'La Messe',
    wordEnglish: 'Mass',
    sentenceFrench: 'Nous allons a la messe pour Noel',
    sentenceEnglish: 'We are going to mass for christmas',
  },
  {
    wordFrench: 'Le pere Noel',
    wordEnglish: 'Father christmas',
    sentenceFrench: 'Le pere noel passe par la cheminee',
    sentenceEnglish: 'Father chritmas comes though the chimnee',
  },
];

const VocabCard = ({
  wordFrench,
  wordEnglish,
  sentenceFrench,
  sentenceEnglish,
}: any) => {
  // change this
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

export const Christmas = ({navigation}) => {
  const vocabList = vocab ?? [];
  const handleXmas = () => {
    navigation.navigate('Christmas');
  };
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <NavBar />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Christmas vocab</Text>
        {vocabList.map((voc) => {
          return (
            <VocabCard
              sentenceEnglish={voc.sentenceEnglish}
              sentenceFrench={voc.sentenceFrench}
              wordFrench={voc.wordFrench}
              wordEnglish={voc.wordEnglish}
            />
          );
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
