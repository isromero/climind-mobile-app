import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddRestaurant } from "../screens/Restaurants/AddRestaurant";
import { screen } from "../utils";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";
const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.restaurants}
        component={RestaurantsScreen}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
        name={screen.restaurant.addRestaurant}
        component={AddRestaurant}
        options={{ title: "Añadir restaurante" }}
      />
    </Stack.Navigator>
  );
}
