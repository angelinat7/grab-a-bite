import { StyleSheet, Text, View } from 'react-native';
export default function DetailsScreen({ route }) {
  const { itemId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Details Screen for Item ID: {itemId}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
