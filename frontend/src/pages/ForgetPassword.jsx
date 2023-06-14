import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useForm, isEmail } from "@mantine/form";
import {password} from "../redux/action/password.action"
export function ForgotPassword() {
     const form = useForm({
       initialValues: {
         email: "",
       },
       validate: {
         email: isEmail("Invalid email"),
       },
     });
      const onSubmit = (values) => {

       dispatch(password(values));
        form.reset();
      };
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    form.setFieldValue(name, value);
  };

 const navigate = useNavigate();
 const dispatch = useDispatch();
  const paperStyle = {
    width: 450,
    height: 1200,
  };
  
  return (
    <Container style={paperStyle} my={80}>
      <Paper withBorder shadow="md" p={30} mt={10} radius="md">
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <Title
            align="center"
            mb="lg"
            sx={(theme) => ({
              fontWeight: 700,
            })}
          >
            Forgot Password?
          </Title>
          <Text c="dimmed" fz="sm" ta="center" mt={20}>
            Enter your email to get a reset link
          </Text>
          <TextInput
            label="Your email"
            mt={40}
            placeholder="me@google.com"
            name="email"
            value={form.values["email"]}
            onChange={handleFieldChange}
            {...form.getInputProps("email")}
            required
          />
          <Group position="apart" mt="lg">
            <Anchor href="/login" color="dimmed" size="sm">
              <Center inline>
                <IconArrowLeft size={rem(12)} stroke={1.5} />
                <Box ml={5}>Back to the login page</Box>
              </Center>
            </Anchor>
            <Button type="submit">Reset password</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
