import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'react-native-firebase';
import {ScrollView} from 'react-native-gesture-handler';
import {MenuTitle, NavBar} from '../../components';
import {colors, spacing} from '../styles';

export const Vocab = ({navigation}) => {
  const [value, setValue] = useState();

  console.log('value', typeof value, value);

  const rootRef = firebase
    .database()
    .ref('age')
    .once('value')
    .then((snapshot) => {
      console.log('User data: ', snapshot.val());
      setValue(snapshot.val());
    });

  const handleXmas = () => {
    navigation.navigate('Christmas');
  };

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <NavBar />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Vocab screen</Text>
      </View>
      <View>
        <Text>BELLO</Text>
        <Text>{value}</Text>
        <MenuTitle title={'Christmas'} onPress={handleXmas} />
        <MenuTitle title={'Holidays'} onPress={handleXmas} />
        <MenuTitle title={'Cooking'} onPress={handleXmas} />
        <MenuTitle title={'Familly'} onPress={handleXmas} />
        <MenuTitle title={'Birthdays'} onPress={handleXmas} />
        <MenuTitle title={'Sports'} onPress={handleXmas} />
        <MenuTitle title={'Colors'} onPress={handleXmas} />
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
