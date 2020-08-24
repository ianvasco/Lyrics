import * as React from 'react';
import { StyleSheet, FlatList, SafeAreaView, View } from 'react-native';
import { Container } from 'native-base';
import CustomHeader from '../../components/Header';
import { StackNavigationProp } from '@react-navigation/stack';
import LyricPreview from '../../components/LyricPreview';
import { useStore } from '../../store';

interface HistoryProps {
    navigation: StackNavigationProp<any>
}

const History = ({navigation}: HistoryProps) => {

  const {historyState} = useStore()

  return (
    <SafeAreaView style={styles.container}>
      <Container>
      <CustomHeader title="History" navigation={navigation} />
      <View style={styles.contentContainer}>
        <FlatList 
            data={historyState}
            keyExtractor={(item, i) => `${item.title}-${item.artist}-${i}`}
            renderItem={({item}) => <LyricPreview song={item} navigation={navigation} />
        } />
      </View>
    </Container>
  </SafeAreaView>
  );
};

export default History;

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
    historyTitle: {
      fontSize: 20,
      fontWeight: '700'
    },
    searchButton: {
      marginTop: 30
    },
  });