import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavBar, TestCard} from '../../components';

export const VocabTest = ({navigation, route}) => {
  const content = route?.params;
  // IF NOT ALL FIELDS ARE ANSWERS, DISABLE CTA
  const [disabled, setDisabled] = useState(false);

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
    navigation.navigate('TestResult', {score: totalScore});
  };

  const myArr = [{dinde: 0}, {Père_Noël: 0}, {cadeau: 0}];
  const hi = 'dinde';

  myArr.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (key === hi) {
        item[key] = 10;
      }
    });
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar />
      <View style={{flex: 1}}>
        {Object.entries(content.content).map((word) => {
          // totalArray.push({name: word[0], score: null});
          totalArray.push({[word[0]]: null});
          return (
            <>
              <TestCard
                word={word[0].replace('_', ' ')}
                sentence={word[1]}
                handleChange={handleChange}
              />
            </>
          );
        })}
      </View>
      <Button
        title={'Submit answers'}
        onPress={handleSubmit}
        disabled={disabled}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
