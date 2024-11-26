import { View } from "react-native";
import { InfoUser } from "../../../components/account";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { styles } from "./UserLoggedScreen.styles";
import { AccountOptions } from "../../../components/account";
export function UserLoggedScreen() {
  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <View>
      <InfoUser />
      <AccountOptions />
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnStyle}
        titleStyle={styles.btnTitleStyle}
        onPress={logout}
      />
    </View>
  );
}
