import * as Yup from "yup";

export const LoginInitialValues = { email: "", password: "" };

export const RegistrationInitialValues = { firstName: "", lastName: "", gender: "", phone: "", email: "", password: "", confirmPassword: "" };

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  phone: Yup.string().required("Required").matches(/^\d+$/, "Phone number must be digits").min(10, "Too Short!"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
