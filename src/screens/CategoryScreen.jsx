import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { getItemsByCategory } from '../data/menuItems';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { fetchMeals } from '../api/meal.api';
import { mealApi } from '../api';

export default function CategoryScreen({ navigation, route }) {
  const [meals, setMeals] = useState([]);
  const { categoryId } = route.params;

  useEffect(() => {
    mealApi
      .getAllByCategoryId(categoryId)
      .then((result) => {
        setMeals(result.data);
      })
      .catch((err) => {
        alert('Failed to fetch meals for category', err.message);
      });
  }, [categoryId, navigation]);

  const itemPressedHandler = (mealId) => {
    navigation.navigate('Details', { itemId: mealId });
  };

  return (
    <ScrollView style={styles.container}>
      {meals.map((meal) => (
        <Card
          key={meal.id}
          meal={meal}
          onPress={itemPressedHandler}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  list: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontSize: 16,
    color: '#FF3B30',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
