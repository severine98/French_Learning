import {NavigationHelpersContext} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
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

const christmas = {
  noel: {
    id: 'noel',
    translation: 'christmas',
    exampleEnglish: 'Merry christmas',
    exampleFrench: 'Joyeux Noel',
    sentences: [
      {
        French: "Noel est le meilleur jour de l' annee",
        English: 'Chritmas is the best day of the year',
      },
      {French: 'Papa noel, est-il passe?', English: 'Has father xmas come?'},
      {
        French: 'Tu as demander quoi pour Noel?',
        English: 'What did you ask for xmas?',
      },
      {
        French: 'Je te souhaite un joyeux Noel',
        English: 'I am wishing you a merry xmas',
      },
    ],
  },
  cadeau: {
    id: 'cadeau',
    translation: 'present',
    sentenceFrench: 'Je lui offre un cadeau',
    sentenceEnglish: 'I am giving him/her a present',
    sentences: [
      {
        French: 'Tu as recu quoi comme cadeaux cette annee?',
        English: 'What presents have you received this year?',
      },
      {
        French: 'Quel est ton cadeau prefere',
        English: 'Which is your favourite present?',
      },
      {
        French: 'Combien de cadeaux as-tu recu??',
        English: 'How many presents have you received??',
      },
      {
        French: 'Le plus gros de cadeaux',
        English: 'The biggest of presents',
      },
    ],
  },
};

const salut = christmas.cadeau.translation;
// console.log(salut);

export const Christmas = ({navigation}) => {
  const vocabList = vocab ?? [];
  const handleXmas = () => {
    navigation.navigate('Christmas');
  };

  console.log(
    // TRANSLATE THE ABOVE
    Object.entries(christmas).map((word) =>
      word.map((word) => word.sentenceEnglish),
    ),
  );

  const handleTest = () => {
    navigation.navigate('VocabTest', {word: christmas});
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
        <TouchableOpacity
          style={{backgroundColor: colors.white}}
          onPress={handleTest}>
          <Text style={{textAlign: 'center', padding: spacing.base}}>
            Take the test
          </Text>
        </TouchableOpacity>
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
