import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { screen } from "../../utils";

export function RestaurantsScreen(props: any) {
  const { navigation } = props;

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurant);
  };

  return (
    <View>
      <Text>RestaurantsScreen</Text>
      <Button title="Add Restaurant" onPress={goToAddRestaurant} />
    </View>
  );
}
