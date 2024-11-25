import { View, ActivityIndicator } from "react-native";
import { Overlay, Text } from "react-native-elements";
import { styles } from "./LoadingModal.styles";

type Props = {
  show?: boolean;
  text?: string;
};

export function LoadingModal({ show = false, text = "" }: Props) {
  return (
    <Overlay isVisible={show} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00aa68" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}
