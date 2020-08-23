import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { Input, Form, Item, Container, Content, Label, Button, Spinner, Toast } from 'native-base'
import CustomHeader from '../../components/Header'

import ApiService from '../../service/api'
import {useStore, Actions} from '../../store'

const Search = () => {

  const [artist, setArtist] = useState('')
  const [title, setTitle] = useState('')
  const [isLoading, setLoading] = useState(false)

  const {historyState, dispatch} = useStore()

  const getLyrics = () => {
    setLoading(true)
    ApiService.getLyrics(artist, title).then((lyrics: string) => {
      dispatch({type: Actions.UpdateHistory, payload: {artist, title, lyrics}})
      setLoading(false)
    }).catch(() => {
      Toast.show({
        text: 'Could not get Lyrics'
      })
      setLoading(false)
    })
  }

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
        <Button full dark style={styles.searchButton} onPress={getLyrics}>
          <Text style={styles.buttonText}>Search</Text>
        </Button>
        {isLoading && <Spinner size="large" color="black" />}
        {historyState.length > 0 &&
          <View style={{marginTop: 20}}>
            <Text>holi</Text>
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
