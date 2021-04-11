import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'react-native-firebase';
import {ScrollView} from 'react-native-gesture-handler';
import {NavBar} from '../../components';
import {colors, spacing} from '../styles';
// import firestore from '@react-native-firebase/firestore';

export const TestResult = ({navigation, route}) => {
  const {score, category} = route?.params;
  const [test, setTest] = useState();

  useEffect(() => {
    firebase
      .database()
      .ref('test')
      .once('value')
      .then((snapshot) => {
        setTest(snapshot.val()[category]);
      });
  }, [category]);

  const handleTryAgain = () => {
    navigation.goBack();
  };
  const handleCorrection = () => {
    navigation.navigate('TestCorrection', {content: test, category});
  };
  const handleBackToVocab = () => {
    navigation.navigate('Christmas');
  };

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <NavBar />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Test Results!!</Text>
      </View>
      <Text style={[styles.text, {color: colors.red, fontSize: 30}]}>
        You scored {score ?? 0} / 10
      </Text>
      <Text style={styles.text} onPress={handleTryAgain}>
        Try again?
      </Text>
      <Text style={styles.text} onPress={handleCorrection}>
        See where you went wrong
      </Text>
      <Text style={styles.text} onPress={handleBackToVocab}>
        Go back to the vocab
      </Text>
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
  text: {
    paddingVertical: spacing.base,
    textAlign: 'center',
  },
});
