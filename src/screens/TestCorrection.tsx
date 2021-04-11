import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CorrectionCard, NavBar} from '../../components';
import {totalArray} from './VocabTest';

export const TestCorrection = ({navigation, route}) => {
  const content = route?.params;

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <NavBar />
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          {Object.entries(content.content).map((word) => {
            const formatedWord = word[0].replace('_', ' ');
            const find = totalArray.find((element) => element[formatedWord]);
            return (
              <>
                <CorrectionCard
                  word={word[0].replace('_', ' ')}
                  sentence={word[1]}
                  point={find}
                />
              </>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
