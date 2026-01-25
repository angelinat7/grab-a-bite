import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CategoryCard({ category, itemCount = 0, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(category.id)}>
      <View style={[styles.container]}>
        <View style={styles.content}>
          <Text style={styles.title}>{category.title}</Text>
          <Text style={styles.itemCount}>{itemCount} items</Text>
        </View>
        <Ionicons
          name='chevron-forward'
          size={styles.arrow.fontSize}
          color={styles.arrow.color}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  itemCount: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  arrow: {
    fontSize: 24,
    color: '#ccc',
    marginLeft: 8,
  },
});
