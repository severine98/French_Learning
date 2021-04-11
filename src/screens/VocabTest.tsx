import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NavBar, TestCard} from '../../components';

export const totalArray: any = [];
export const answersArray: any = [];

export const VocabTest = ({navigation, route}) => {
  const {content, category} = route.params ?? {};

  const handleChange = (value: string, word: string) => {
    let singleScore = 0;
    let found = false;

    if (value === word) {
      singleScore = 1;
    } else {
      singleScore = 0;
    }

    if (answersArray.length < 1) {
      answersArray.push({[word]: value});
    }

    answersArray.forEach((item) => {
      if (Object.keys(item).toString() === word) {
        item[word] = value;
        found = true;
      }
    });

    if (!found) {
      answersArray.push({[word]: value});
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
      category,
    });
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <NavBar />
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          {Object.entries(content).map((word) => {
            totalArray.push({[word[0].replace('_', ' ')]: null});
            return (
              <>
                <TestCard
                  word={word[0].replace('_', ' ')}
                  sentence={word[1]}
                  handleChange={handleChange}
                  category={category}
                />
              </>
            );
          })}
          <Button title={'Submit answers'} onPress={handleSubmit} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
