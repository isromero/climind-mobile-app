import { AppNavigation } from "../navigation/AppNavigation";
import "../utils/firebase"; // Initialize Firebase
import Toast from "react-native-toast-message";

export default function Index() {
  return (
    <>
      <AppNavigation />
      <Toast />
    </>
  );
}
