import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { Input, Form, Item, Container, Content, Label, Button } from 'native-base'
import CustomHeader from '../../components/Header'
import {useStore, Actions} from '../../store'

const Search = () => {

  const [artist, setArtist] = useState('')
  const [title, setTitle] = useState('')

  const {historyState, dispatch} = useStore()

  return (
    <SafeAreaView style={styles.container}>
      <Container>
      <CustomHeader title="Search Lyric" />
      <Content style={styles.contentContainer}>
        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input value={artist} onChangeText={setArtist}/>
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input value={title} onChangeText={setTitle} />
          </Item>
        </Form>
        <Button full dark style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </Button>
        {historyState.length > 0 &&
          <View>
          </View>
        }
      </Content>
    </Container>
  </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontWeight: '700'
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    margin: 16
  },
  searchButton: {
    marginTop: 30
  },
});
