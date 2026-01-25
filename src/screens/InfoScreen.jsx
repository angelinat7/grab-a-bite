import { StyleSheet, Text, View } from 'react-native';

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text>Info Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
