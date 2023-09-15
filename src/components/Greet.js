import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Greet = ({name}) => {
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({});
