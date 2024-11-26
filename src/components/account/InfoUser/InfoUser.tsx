import { View } from "react-native";
import { Avatar, Text } from "react-native-elements";
import { getAuth } from "firebase/auth";
import { styles } from "./InfoUser.styles";
export function InfoUser() {
  const { uid, email, photoURL, displayName } = getAuth().currentUser;

  const changeAvatar = () => {
    console.log("changeAvatar");
  };
  return (
    <View style={styles.content}>
      <Avatar
        rounded
        size="large"
        icon={{ type: "material-community", name: "person" }}
        containerStyle={styles.avatar}
        source={{ uri: photoURL || "" }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
