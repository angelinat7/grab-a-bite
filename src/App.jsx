import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './navigation/RootNavigator';
import CartProvider from './context/cart/CartProvider';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
        <CartProvider>
          <RootNavigator />
        </CartProvider>
    </NavigationContainer>
  );
}
