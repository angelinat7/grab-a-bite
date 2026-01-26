import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CartButton from '../components/CartButton';

export default function HomeNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: ({ tintColor }) => <CartButton tintColor={tintColor} />,
        headerTintColor: '#007aff',
      }}
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen
        name='Category'
        component={CategoryScreen}
      />
      <Stack.Screen
        name='Details'
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}
