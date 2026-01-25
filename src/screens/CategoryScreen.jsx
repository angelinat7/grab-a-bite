import { StyleSheet, Text, View } from 'react-native';

export default function CategoryScreen({ route }) {
  const { categoryId } = route.params;

  alert(`Category ID: ${categoryId}`);

  return (
    <View style={styles.container}>
      <Text>Category Screen</Text>
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
