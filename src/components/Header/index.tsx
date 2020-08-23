import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Header } from 'native-base'

interface HeaderProps {
    title: string
}

const CustomHeader = ({title}: HeaderProps) => {
  return (
    <Header style={styles.header}>
      <Text>{title}</Text>
    </Header>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderBottomWidth: 0.5,
      borderBottomColor: 'grey',
      elevation: 4,
      height: 46,
      justifyContent: 'center',
    },
  title: {
    color: 'black',
    fontSize: 17,
    letterSpacing: -0.41,
  }
});


