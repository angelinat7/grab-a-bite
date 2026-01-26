import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { getItemById } from '../data/menuItems';
import Button from '../components/Button';
export default function DetailsScreen({ navigation, route }) {
  const { itemId } = route.params;

  const item = getItemById(itemId);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
          resizeMode='cover'
        />
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.basePrice}>
            Base Price: €{item.price.toFixed(2)}
          </Text>
          <View style={styles.divider} />

          {/* Extra selector */}

          <View style={styles.qtySection}>
            <Text style={styles.qtyLabel}>Quantity:</Text>
            <Text> - 1 + </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.totalLabel}>Total Price:</Text>
            <Text style={styles.totalPrice}>€{item.price.toFixed(2)}</Text>
          </View>
          <View style={styles.footerButtons}>
            <Button
              style={styles.addButton}
              title='Add to Cart'
              onPress={() => {}}
              // TODO add onPress handler
            />
            <Button
              style={styles.viewCartButton}
              title='View Cart'
              variant='outline'
              onPress={() => navigation.navigate('Cart')}
              // TODO add onPress handler
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#FF3B30',
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 8,
  },
  basePrice: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  qtySection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qtyLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 16,
    color: '#666',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  footerButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  addButton: {
    flex: 2,
  },
  viewCartButton: {
    flex: 1,
  },
});
