import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LyricPreview } from '../../types'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

interface LyricPreviewProps {
    song: LyricPreview
    navigation: StackNavigationProp<any>
}

const LyricPreviewComponent = ({song, navigation}: LyricPreviewProps) => {

    React.useEffect(() => {
        song
    }, [])

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Lyric', {song})}>
      <Text style={styles.previewText}>{song.artist}: {song.title}</Text>
    </TouchableOpacity>
  );
};

export default LyricPreviewComponent;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'ghostwhite',
      padding: 16
  },
  previewText: {
      fontSize: 18
  }
});
