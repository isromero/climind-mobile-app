import { View } from "react-native";
import { styles } from "./RegisterScreen.styles";
import { RegisterForm } from "../../../components/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
