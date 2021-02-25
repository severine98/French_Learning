import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={styles.title} onPress={() => navigation.navigate('Menu')}>
        Click here to go to the menu
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'blue',
  },
});
