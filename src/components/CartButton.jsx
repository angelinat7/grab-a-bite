import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function CartButton({ tintColor }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <Ionicons
        name='cart'
        size={28}
        color={tintColor}
      />
    </TouchableOpacity>
  );
}
