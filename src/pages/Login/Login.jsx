import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormLayout } from "../../layout";
import {
  container,
  formContainer,
  inputContainer,
  loginButton,
  registerText,
  titleContainer,
  titleText,
} from "./LoginStyles";
import { useAuth } from "../../utils/auth";
import { useState } from "react";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const auth = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required.")
        .max(25, "Username max length exceeded"),
      password: Yup.string().required("Password is required."),
    }),
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      try {
        const URL = import.meta.env.VITE_API_URL;
        const tokenResponse = await axios.post(`${URL}/api/auth/login`, values);
        const accessToken = tokenResponse.data.access_token;
        const userResponse = await axios.get(`${URL}/api/auth/profile`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setIsLoading(false);
        const user = userResponse.data;
        auth.login(accessToken, user);
        navigate("/");
        actions.resetForm();
      } catch (error) {
        setIsLoading(false);
        toast({
          title: "Verify your credentials or internet connection.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
          color: "white",
        });
      }
    },
  });

  return (
    <FormLayout>
      <Box {...container}>
        <Text></Text>
        <Box {...formContainer} as={"form"}>
          <Box {...titleContainer}>
            <Text {...titleText}>Login</Text>
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
          <Button
            {...loginButton}
            onClick={formik.handleSubmit}
            isLoading={isLoading}
          >
            Login
          </Button>
          <RouterLink to="/register">
            <Text {...registerText}>Don't have an account? Register</Text>
          </RouterLink>
        </Box>
      </Box>
    </FormLayout>
  );
};
