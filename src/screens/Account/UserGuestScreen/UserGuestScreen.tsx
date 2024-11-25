import { View, ScrollView } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { styles } from "./UserGuestScreen.styles";
import { useNavigation } from "@react-navigation/native";

export function UserGuestScreen() {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate("/login");
  };
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Text style={styles.title}>Consultar tu perfil de Climind</Text>
      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
}
