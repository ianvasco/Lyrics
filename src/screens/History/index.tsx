import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HistoryProps {}

const History = (props: HistoryProps) => {
  return (
    <View style={styles.container}>
      <Text>History</Text>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {}
});
