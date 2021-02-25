import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, spacing} from '../src/styles';

type MenuTitleProps = {
  title: string;
  onPress: () => void;
};

export const MenuTitle = ({title, onPress}: MenuTitleProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <View
        style={{
          borderColor: colors.green,
          borderWidth: 3,
          marginTop: spacing.base,
          marginHorizontal: spacing.base,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: spacing.base,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
