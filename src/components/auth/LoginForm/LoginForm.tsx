import { View } from "react-native";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { Button, Input, Icon } from "react-native-elements";
import { styles } from "./LoginForm.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.data";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate(screen.account.account as never);
        Toast.show({
          text1: "Inicio de sesión exitoso",
          position: "bottom",
          type: "success",
        });
      } catch (error) {
        Toast.show({
          text1: "Error al iniciar sesión",
          position: "bottom",
          type: "error",
        });
      }
    },
  });
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.input}
        secureTextEntry={false}
        rightIcon={
          <Icon name="at" type="material-community" style={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={!showPassword}
        rightIcon={
          <Icon
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            type="material-community"
            style={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => formik.handleSubmit()}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
