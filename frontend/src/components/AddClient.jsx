import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  ScrollArea,
  Button,
  Paper,
  TextInput,
  Grid
} from "@mantine/core";
import { useForm, isEmail } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import {
  addClient,
  getOneClient,
  updateClient,
} from "../redux/action/client.action";

export function AddClient(props) {
  const dispatch = useDispatch();
  // const theme = useMantineTheme();
   const navigate = useNavigate();
  const { id } = useParams()
  const [mode, setMode] = useState("add");
  const { client } = useSelector((state) => state.clientData);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      gst_number: "",
      company_name: "",
      website: "",
      payment: "",
      address: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      gst_number: (value) =>
        value.length === 15 ? "Name must have at least 2 letters" : null,
      //   value.length < 3 ? "Password must have at least 3 letters" : null,
    },
  });

  useEffect(() => {
    if (id) {
      setMode("edit");
      dispatch(getOneClient(id));
    }
  }, []);
  useEffect(() => {
    if (client && mode === "edit") {
      form.setValues({
        name: client.data?.[0]?.name || "",
        email: client.data?.[0]?.email || "",
        phone: client.data?.[0]?.phone || "",
        gst_number: client.data?.[0]?.gst_number || "",
        company_name: client.data?.[0]?.company_name || "",
        website: client.data?.[0]?.website || "",
        payment: client.data?.[0]?.payment || "",
        address: client.data?.[0]?.address || "",
      });
    }
  }, [client, mode]);

  const onSubmit = async (values) => {
    if (
      values.phone &&
      (!/^\d+$/.test(values.phone) || values.phone.trim().length !== 10)
    ) {
      form.setErrors({ phone: "Invalid phone number" });
      return;
    }
    if (
      values.name &&
      (typeof values.name !== "string" || values.name.trim().length <= 2)
    ) {
      form.setErrors({ name: "Invalid Name" });

      return;
    }
    if (values.gst_number && (values.gst_number.trim().length === 15)){
      form.setErrors({ gst_number: "Invalid GST NUMBER" });

      return;
    }
      if (mode === "add") {
        dispatch(addClient(values)).then(() => {
          form.reset();
          navigate("/home/client");
        });
        
      } else {
        await dispatch(updateClient(id, values)).then(() => {
          form.reset();
          navigate("/home/client");
      
      });
    }
  };

  return (
    <div>
      <ScrollArea>
        {" "}
        <Paper
          shadow="sm"
          radius="md"
          p="sm"
          mt="6em"
          ml="15em"
          w="60%"
          style={{ backgroundColor: "#F1F3F5" }}
        >
          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            <h2 align="left" fw="md" fz="xs">
              {mode === "edit" ? "CLIENT EDIT" : "CLIENT ADD"}
            </h2>
            <TextInput
              label="Name"
              mt="sm"
              placeholder="Enter Name"
              required
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              value={form.values.name}
              w="100%"
              onChange={(e) =>
                form.setValues({ ...form.values, name: e.target.value })
              }
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              mt="sm"
              placeholder="you@google.com"
              required
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              value={form.values.email}
              w="100%"
              onChange={(e) =>
                form.setValues({ ...form.values, email: e.target.value })
              }
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Phone"
              mt="sm"
              placeholder="Enter Number"
              required
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              value={form.values.phone}
              w="100%"
              onChange={(e) =>
                form.setValues({ ...form.values, phone: e.target.value })
              }
              {...form.getInputProps("phone")}
            />
            <TextInput
              label="Gst Number"
              mt="sm"
              placeholder="Enter Gst_Number"
              required
              w="100%"
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              value={form.values.gst_number}
              onChange={(e) =>
                form.setValues({ ...form.values, gst_number: e.target.value })
              }
              {...form.getInputProps("gst_number")}
            />
            <TextInput
              label="Payment"
              mt="sm"
              labelProps={{ display: "flex" }}
              required
              color="#DEE2E6"
              w="100%"
              value={form.values.payment}
              onChange={(e) =>
                form.setValues({ ...form.values, payment: e.target.value })
              }
            />
            <TextInput
              label="Website"
              mt="sm"
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              value={form.values.website}
              w="100%"
              onChange={(e) =>
                form.setValues({ ...form.values, website: e.target.value })
              }
            />
            <TextInput
              label="Company Name"
              mt="sm"
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              w="100%"
              value={form.values.company_name}
              onChange={(e) =>
                form.setValues({ ...form.values, company_name: e.target.value })
              }
            />
            <Grid>
              <Grid.Col span={6}>
                {" "}
                <Button
                  align="right"
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                  fullWidth
                  mt="xl"
                  w="40%"
                  radius="md"
                  type="submit"
                  ml={200}
                  onClick={() => navigate("/home/client")}
                >
                  {" "}
                  Back
                </Button>
              </Grid.Col>
              <Grid.Col span={6}>
                {" "}
                <Button
                  align="right"
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                  fullWidth
                  mt="xl"
                  w="40%"
                  radius="md"
                  type="submit"
                >
                  {mode === "add" ? "Add" : "Update"}
                </Button>
              </Grid.Col>
            </Grid>
          </form>
        </Paper>
      </ScrollArea>
    </div>
  );
}
