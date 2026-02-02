import { useEffect, useState } from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { categoryApi, mealApi } from '../api';
import CategoryCard from '../components/CategoryCard';
import Card from '../components/Card';

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);

  const [toggleRefresh, setToggleRefresh] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setRefreshing(true);
      try {
        const categoriesResult = await categoryApi.getAll();
        setCategories(categoriesResult.data);

        const featuredResult = await mealApi.getFeatured();
        setFeatured(featuredResult.data);
      } catch (error) {
        alert('Failed to fetch data', error.message);
      } finally {
        setRefreshing(false);
      }
    }

    fetchData();
  }, [toggleRefresh]);

  const refreshHandler = () => {
    setToggleRefresh((state) => !state);
  };

  const categoryPressHandler = (categoryId) => {
    navigation.navigate('Category', { categoryId });
  };

  const itemPressHandler = (itemId) => {
    navigation.navigate('Details', { itemId });
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refreshHandler}
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.restaurantName}>Grab A Bite</Text>
        <View style={styles.headerInfo}>
          <Text style={styles.infoText}>⭐ 4.9 Rating</Text>
          <Text style={styles.infoDot}>•</Text>
          <Text style={styles.infoText}>🕐 25-35 min</Text>
        </View>
        <Text style={styles.tagline}>
          Delicious food delivered to your door!
        </Text>
      </View>

      {/* Featured Section  */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Items</Text>
        <ScrollView
          style={styles.featuredList}
          horizontal
        >
          {featured.map((meal) => (
            <View
              style={styles.featuredCard}
              key={meal.id}
            >
              <Card
                meal={meal}
                onPress={itemPressHandler}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Category Section */}
      <View style={styles.section}>
        {categories.map((category) => {
          const itemCount = category.length;
          return (
            <CategoryCard
              key={category.id}
              category={category}
              itemCount={itemCount}
              onPress={categoryPressHandler}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#007aff',
    padding: 24,
    paddingTop: 16,
    paddingBottom: 28,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  infoDot: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.6,
    marginHorizontal: 8,
  },
  tagline: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  section: {
    padding: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  featuredList: {
    paddingRight: 16,
    flexDirection: 'row',
  },
  featuredCard: {
    width: 200,
    marginRight: 12,
  },
  bottomPadding: {
    height: 24,
  },
});
