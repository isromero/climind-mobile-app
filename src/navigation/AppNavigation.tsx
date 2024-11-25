import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { screen } from "../utils";
import { RestaurantStack } from "./RestaurantStack";
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { AccountStack } from "./AccountStack";
import { SearchStack } from "./SearchStack";
const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: "#646464",
        tabBarActiveTintColor: "#00aa68",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurantes" }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favorites" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Search" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Account" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route: any, color: any, size: any) {
  let iconName;

  if (route.name === screen.restaurant.tab) {
    iconName = "compass-outline";
  } else if (route.name === screen.favorites.tab) {
    iconName = "heart-outline";
  } else if (route.name === screen.ranking.tab) {
    iconName = "star-outline";
  } else if (route.name === screen.search.tab) {
    iconName = "magnify";
  } else if (route.name === screen.account.tab) {
    iconName = "home-outline";
  }
  return (
    <Icon
      type="material-community"
      name={iconName!}
      size={size}
      color={color}
    />
  );
}
