import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Email inválido").required("Email es requerido"),
    password: Yup.string()
      .required("Contraseña es requerida")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    repeatPassword: Yup.string()
      .required("Repite la contraseña")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  });
}
