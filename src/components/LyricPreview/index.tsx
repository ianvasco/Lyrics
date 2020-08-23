import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LyricPreview } from '../../types'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface LyricPreviewProps {
    song: LyricPreview
}

const LyricPreviewComponent = ({song}: LyricPreviewProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
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
