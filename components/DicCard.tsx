/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Heart} from '../assets/icons';
import {colors, spacing} from '../src/styles';
import firebase from 'react-native-firebase';

const DicCard = ({
  wordFrench,
  wordEnglish,
  sentenceFrench,
  sentenceEnglish,
  addedToDictionary,
}: any) => {
  const isWordFeminine = wordFrench.split(' ').includes('La', 'Une');
  const [addedToDic, setAddedToDic] = useState(false);
  console.log('addedToDictionary', addedToDictionary);

  const rawWord = 'Père_Noël';

  const handleToggleFav = () => {
    console.log('TOGGLE FAV');
    setAddedToDic(!addedToDic);
    firebase
      .database()
      .ref('vocab')
      .child('christmas')
      .child('Père_Noël')
      .update({fav: addedToDic ? true : false});
  };
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
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text style={[styles.sentenceFrench, {width: '80%'}]}>
            {sentenceFrench}
          </Text>
          <TouchableOpacity onPress={handleToggleFav}>
            <Text style={{color: addedToDic ? colors.red : colors.black}}>
              heart
            </Text>
          </TouchableOpacity>
        </View>
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

export {DicCard};
