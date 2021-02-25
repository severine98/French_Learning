import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {colors, spacing, typography} from '../src/styles';

export const NavBar = () => {
  const handleMenu = () => {
    console.log('nav to menu');
  };
  const handleProfile = () => {
    console.log('nav to profile');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handleMenu} style={styles.title}>
        Menu
      </Text>
      <Text onPress={handleProfile} style={styles.title}>
        Profile
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    backgroundColor: colors.green,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    borderBottomWidth: 3,
    borderBottomColor: colors.pink,
  },
  title: {
    color: colors.white,
  },
});
