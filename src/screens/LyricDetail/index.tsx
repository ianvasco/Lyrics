import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { LyricDetail } from '../../types'
import { ScrollView } from 'react-native-gesture-handler';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomHeader from '../../components/Header';
import { Content } from 'native-base';

type LyricScreenRouteProp = RouteProp<RootStackParamList, 'Lyric'>

interface LyricProps {
    route: LyricScreenRouteProp
    navigation: StackNavigationProp<any>
}

const LyricComponent = ({route, navigation}: LyricProps) => {

    const [song, setSong] = useState<LyricDetail>()

    useEffect(() => {
        const {params} = route
        if (params && params.song) {
            setSong(params.song)
        }
    }, [route])

  return (
    <SafeAreaView style={styles.container}>
        <CustomHeader title="Lyrics" navigation={navigation} enableBack={true}/>   
        <Content>
            <Text style={styles.title}>{`${song?.artist} - ${song?.title}`}</Text>
                <ScrollView>
                    <Text>
                        {song?.lyrics}
                    </Text>
                </ScrollView>
        </Content>

    </SafeAreaView>
  );
};

export default LyricComponent;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fafafa',
  },
  title: {
      fontSize: 18,
      marginBottom: 20
  }

});
