import React from "react";
import { ChakraProvider, Box, Button, FormControl, FormLabel, Input, Select, Stack, Heading, Text } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegistrationInitialValues, RegistrationSchema } from "../../utils/validate/user";

const RegisterPage = () => {
  return (
    <ChakraProvider>
      <Box display="flex" alignItems="center" justifyContent="center" height="100vh" backgroundColor="gray.100">
        <Box width="400px" p={5} borderRadius="md" boxShadow="md" backgroundColor="white">
          <Heading as="h2" size="lg" mb={6} textAlign="center">
            Register
          </Heading>
          <Formik
            initialValues={RegistrationInitialValues}
            validationSchema={RegistrationSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              actions.setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Field name="firstName">{({ field }) => <Input {...field} />}</Field>
                    <ErrorMessage name="firstName">
                      {(msg) => (
                        <Text color="red.500" fontSize="sm">
                          {msg}
                        </Text>
                      )}
                    </ErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Field name="lastName">{({ field }) => <Input {...field} />}</Field>
                    <ErrorMessage name="lastName">
                      {(msg) => (
                        <Text color="red.500" fontSize="sm">
                          {msg}
                        </Text>
                      )}
                    </ErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <Field name="gender">
                      {({ field }) => (
                        <Select {...field}>
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Select>
                      )}
                    </Field>
                    <ErrorMessage name="gender">
                      {(msg) => (
                        <Text color="red.500" fontSize="sm">
                          {msg}
                        </Text>
                      )}
                    </ErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Field name="phone">{({ field }) => <Input {...field} />}</Field>
                    <ErrorMessage name="phone">
                      {(msg) => (
                        <Text color="red.500" fontSize="sm">
                          {msg}
                        </Text>
                      )}
                    </ErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Field name="email">{({ field }) => <Input {...field} type="email" />}</Field>
                    <ErrorMessage name="email">
                      {(msg) => (
                        <Text color="red.500" fontSize="sm">
                          {msg}
                        </Text>
                      )}
                    </ErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Field name="password">{({ field }) => <Input {...field} type="password" />}</Field>
                    <ErrorMessage name="password">
                      {(msg) => (
                        <Text color="red.500" fontSize="sm">
                          {msg}
                        </Text>
                      )}
                    </ErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <Field name="confirmPassword">{({ field }) => <Input {...field} type="password" />}</Field>
                    <ErrorMessage name="confirmPassword">
                      {(msg) => (
                        <Text color="red.500" fontSize="sm">
                          {msg}
                        </Text>
                      )}
                    </ErrorMessage>
                  </FormControl>

                  <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                    Register
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default RegisterPage;
