import { useForm } from "@mantine/form";
import {
  PasswordInput,
  Group,
  Button,
  Box,
  Paper,
  Title,
  Container,
} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../redux/action/password.action";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function ResetPassword() {
  const { token } = useParams();
  console.log(token, "nmesb");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paperStyle = {
    width: 450,
    height: 1200,
  };
  const form = useForm({
    initialValues: {
      password: "",
    },
  });
  const onSubmit = (values) => {
    dispatch(resetPassword(token, values)).then(() => {
      form.reset();
      navigate("/login");
    });
    
  };
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    form.setFieldValue(name, value);
  };
  return (
    <Container style={paperStyle} my={80}>
      <Paper withBorder shadow="md" p={30} mt={10} radius="md">
        <Box maw={340} mx="auto">
          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            <Title
              align="center"
              mb="lg"
              sx={(theme) => ({
                fontWeight: 700,
              })}
            >
              Reset Password
            </Title>
            <PasswordInput
              label="Password"
              placeholder="Password"
              name="password"
              value={form.values["password"]}
              onChange={handleFieldChange}
              required
              
            />
            {/* 
            <PasswordInput
              mt="sm"
              label="Confirm password"
              placeholder="Confirm password"
              name="forget password"
              value={form.values["forget password"]}
              onChange={handleFieldChange}
              required
            /> */}

            <Button type="submit" mt="2rem">Reset password</Button>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}
