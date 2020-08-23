import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LyricProps {}

const Lyric = (props: LyricProps) => {
  return (
    <View style={styles.container}>
      <Text>Lyric</Text>
    </View>
  );
};

export default Lyric;

const styles = StyleSheet.create({
  container: {}
});
