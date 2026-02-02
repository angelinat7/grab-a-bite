import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TouchableOpacity } from "react-native";
import CategoryScreen from "../screens/CategoryScreen";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";

export default function HomeNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={({ navigation }) => ({
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("CartModal")}>
                        <Ionicons name="cart" size={28} color="grey" style={{ marginRight: 15 }} />
                    </TouchableOpacity>
                )
            }
        })}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}