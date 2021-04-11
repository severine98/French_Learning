import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CorrectionCard, NavBar} from '../../components';

export const TestCorrection = ({navigation, route}) => {
  const content = route?.params;
  const totalArray: any = [];

  const handleChange = (value: string, word: string) => {
    let singleScore = 0;
    if (value === word) {
      singleScore = 1;
    } else {
      singleScore = 0;
    }
    totalArray.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (key === word) {
          item[key] = singleScore;
        }
      });
    });
    return singleScore;
  };

  const handleSubmit = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const scoreArray: number | null | unknown[] = [];
    totalArray.forEach((item) => {
      Object.values(item).forEach((value) => {
        scoreArray.push(value);
      });
    });
    const totalScore = scoreArray.reduce(reducer);
    navigation.navigate('TestResult', {
      score: totalScore,
      scoreArray,
    });
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <NavBar />
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          {Object.entries(content.content).map((word) => {
            totalArray.push({[word[0].replace('_', ' ')]: null});
            return (
              <>
                <CorrectionCard
                  word={word[0].replace('_', ' ')}
                  sentence={word[1]}
                  handleChange={handleChange}
                />
              </>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
