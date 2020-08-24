import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Header, Left, View, Body, Title, Right } from 'native-base'
import { StackNavigationProp } from '@react-navigation/stack';

interface HeaderProps {
    title: string,
    enableBack?: boolean
    navigation: StackNavigationProp<any, any>
}

const CustomHeader = ({title, enableBack, navigation}: HeaderProps) => {
  return (
    <Header style={styles.header}>
      {enableBack ? (
        <Left style={styles.flex}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
        </Left>
    ) : (
      <View style={styles.flex} />
    )}
      <Body style={styles.body}>
       <Title style={styles.title}>{title}</Title>  
      </Body>
      <Right style={styles.flex} />
    </Header>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
      alignItems: 'center',
      backgroundColor: '#fafafa',
      borderBottomWidth: 0.5,
      borderBottomColor: 'grey',
      elevation: 4,
      height: 46,
      justifyContent: 'center',
    },
  flex: {
    flex: 1,
  },
  body: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: 'black', 
    fontSize: 20
  },
  title: {
    color: 'black',
  }
});


