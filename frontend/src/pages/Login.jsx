import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { useForm, isEmail } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { login } from "../redux/action/login.action";
export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const paperStyle = {
    width: 450,
    height: 500,
  };
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      password: (value) =>
        value.length === 0 ? "Please enter the password" : null,
    },
  });
  const onSubmit = (values) => {
    dispatch(login(values));
  };
  const logins = useSelector((state) => state.login);
  const fields = [
    { name: "email", label: "Email", component: TextInput },
    { name: "password", label: "Password", component: PasswordInput },
  ];


  useEffect(() => {
    const token = logins.accessToken;
    const role = logins.login?.data?.[0].role?.[0]?.name;
    role && localStorage.setItem("role", role);
    if (token) {
      const existingAccessToken = localStorage.getItem("accessToken");
     
      if (existingAccessToken) {
        localStorage.removeItem("accessToken");
       
      }
      localStorage.setItem("accessToken", token);
      //route.push('/dashboard');
      if(role){
      const exsistingRole = localStorage.getItem("role");
      if(exsistingRole) localStorage.removeItem("role");
      }
       localStorage.setItem("role", role);
      navigate("/home");
    }
  }, [logins, navigate]);
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
            Log In
          </Title>

          {fields.map(({ name, label, component: Field }) => (
            <Field
              mt={15}
              key={name}
              label={label}
              value={form.values[name]}
              //onChange={handleFieldChange}
              name={name}
              required
              radius="md"
              {...form.getInputProps(name)}
            />
          ))}
          <Button w="50%" mt={25} radius="xl" type="submit">
            Log In
          </Button>

          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor href="/forgotpassword" color="blue" size="sm">
              Forgot password?
            </Anchor>
          </Group>

          <Text color="dimmed" size="sm" align="center" mt="sm">
            Do not have an account yet?{" "}
            <Anchor href="/register" color="blue" size="sm">
              Register
            </Anchor>
          </Text>
        </form>
      </Paper>
    </Container>
  );
}
