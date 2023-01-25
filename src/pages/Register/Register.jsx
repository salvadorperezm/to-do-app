import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Input,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  container,
  formContainer,
  inputContainer,
  loginText,
  registerButton,
} from "./RegisterStyles";
import { FormLayout } from "../../layout";

export const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "First name must be at least 2 characters.")
        .max(25, "First name is too large.")
        .required("First name is required."),
      lastName: Yup.string()
        .min(2, "Last name must be at least 2 characters.")
        .max(25, "Last name is too large.")
        .required("Last name is required."),
      email: Yup.string()
        .email("Invalid email.")
        .required("Email is required."),
      username: Yup.string().required("Username is required."),
      password: Yup.string().required("Password is required."),
    }),
    onSubmit: async (values, actions) => {
      try {
        console.log(values);
        actions.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <FormLayout>
      <Box {...container}>
        <Text></Text>
        <Box {...formContainer} as={"form"}>
          <Box {...inputContainer}>
            <FormControl
              isInvalid={formik.errors.firstName && formik.touched.firstName}
            >
              <FormLabel>First name</FormLabel>
              <Input
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box {...inputContainer}>
            <FormControl
              isInvalid={formik.errors.lastName && formik.touched.lastName}
            >
              <FormLabel>Last name</FormLabel>
              <Input
                type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box {...inputContainer}>
            <FormControl
              isInvalid={formik.errors.email && formik.touched.email}
            >
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box {...inputContainer}>
            <FormControl
              isInvalid={formik.errors.username && formik.touched.username}
            >
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box {...inputContainer}>
            <FormControl
              isInvalid={formik.errors.password && formik.touched.password}
            >
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
          </Box>
          <Button {...registerButton} onClick={formik.handleSubmit}>
            Register
          </Button>
          <Text {...loginText}>
            Already have an account? <RouterLink to="/login">Login</RouterLink>
          </Text>
        </Box>
      </Box>
    </FormLayout>
  );
};
