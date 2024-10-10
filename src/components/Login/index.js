import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, Text } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginInitialValues, LoginSchema } from "../../utils/validate/user";

const LoginPage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh" backgroundColor="gray.100">
      <Box width="400px" p={5} borderRadius="md" boxShadow="md" backgroundColor="white">
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Login
        </Heading>
        <Formik
          initialValues={LoginInitialValues}
          validationSchema={LoginSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack spacing={4}>
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
                <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default LoginPage;
