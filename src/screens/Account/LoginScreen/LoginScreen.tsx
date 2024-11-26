import { View, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./LoginScreen.styles";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { LoginForm } from "../../../components/auth";
export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register as never);
  };
  return (
    <ScrollView>
      <View style={styles.content}>
        <LoginForm />
        <Text style={styles.registerText}>
          ¿Aún no tienes cuenta?{" "}
          <Text style={styles.registerBtn} onPress={goToRegister}>
            Registrarse
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
