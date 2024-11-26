import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import { styles } from "./ChangeDisplayName.styles";
export function ChangeDisplayNameForm() {
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y apellidos"
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
      />
      <Button
        title="Cambiar nombre y apellidos"
        onPress={() => {}}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
