import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { useRef } from "react";
import {
  ActionIcon,
  ScrollArea,
  Button,
  Paper,
  TextInput,
  Checkbox,
  Select,
  FileInput,
  rem,
  Image,
  Box,
  Grid,
  MultiSelect,
  createStyles,
  Text,
  Group,
  Avatar,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import {
  IconSearch,
  IconArrowRight,
  IconArrowLeft,
  IconUpload,
  IconCloudUpload,
} from "@tabler/icons-react";
import { useForm, isNotEmpty } from "@mantine/form";
import {
  addDocument,
  getOneDocument,
  updateDocument,
} from "../redux/action/document.action";
import { imageUpload } from "../redux/action/imageUpload.action";
import { client } from "../redux/action/client.action";
import { services } from "../redux/action/service.action";
import { employee } from "../redux/action/employee.action.js";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: rem(30),
  },

  dropzone: {
    borderWidth: rem(1),
    paddingBottom: rem(50),
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: rem(250),
    left: `calc(50% - ${rem(125)})`,
    bottom: rem(-20),
  },
}));
export function AddEditDocument(props) {
  const dispatch = useDispatch();
  // const theme = useMantineTheme();
  const { classes, theme } = useStyles();
  const openRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const form = useForm({
    initialValues: {
      name: "",
      file: "",
      service: "",
      client_id: "",
      user_id: [],
    },
    validate: {
      user_id: isNotEmpty("Select User"),
      client_id: isNotEmpty("Select Client"),
     
    },
  });
   
  const [mode, setMode] = useState("add");
     const [imageUrl, setImageUrl] = useState(null);
  const document = useSelector((state) => state.document);
  
  const { image } = useSelector((state) => state.image);
 
const employees = useSelector((state) => state.employeeData);
   const clients = useSelector((state) => state.clientData)
  
  
    useEffect(() => {
      dispatch(client());
    }, [dispatch]);
    
  if (clients?.clients?.data) {
    var data = clients?.clients?.data?.map((data) => ({
      label: data?.name,
      value: data?._id,
    }));
  } else {
    data = [];
  }

  useEffect(() => {
    if (id) {
      setMode("edit");
      dispatch(getOneDocument(id));
    }
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(employee());
  }, []);
  useEffect(() => {
    if (document && mode === "edit") {
      const userIDs = document.document.data?.[0]?.user?.map((user) => user?._id) || []
      form.setValues({
        name: document.document.data?.[0]?.name || "",
        file: document.document.data?.[0]?.file || "",
        client_id: document.document.data?.[0]?.client?.[0]?._id || "",
        created_at: document.document.data?.[0]?.created_at || "",
        user_id: userIDs || "",
      });
      // console.log("Role value:", employee.data?.[0]?.role?.[0]?._id);
    }
  }, [document, mode]);

  const onSubmit = async (values) => {
    
      if (mode === "add") {
       
      dispatch(addDocument({ ...values, file: image?.data?.filename })).then(
        () => {
          form.reset();
           navigate("/home/document");
        }
      );
    } else {
      const data = { ...values, file: image?.data?.filename };
      await dispatch(updateDocument(id, data)).then(() => {
        form.reset();
         navigate("/home/document");
      });
    }
  };
  if (employees?.employees?.data) {
    var Edata = employees?.employees?.data?.map((data) => ({
      label: data?.name,
      value: data?._id,
    }));
  } else {
    Edata = [];
  }
  const handleSelectChange = (selectedOption) => {
    form.setValues({ ...form.values, client_id: selectedOption });
  };
 
    const handleSelectUserChange = (selectedOption) => {
    //console.log(selectedOption)
     form.setValues({ ...form.values, user_id: selectedOption });
    };
  const fileupload = async (e) => {
    const file = e?.[0];
   
    const allowedFormats = ["image/png", "image/jpeg"];

    if (file) {
      if (allowedFormats.includes(file.type)) {
        const url = URL.createObjectURL(file);
        setImageUrl(url);
        const formData = new FormData();
        formData.append("file", file);
        dispatch(imageUpload(formData));
      } else {
        notifications.show({
          title: "Error",
          message: "Only PNG and JPEG formats are allowed.",
          autoClose: 8000,
        });
      }
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
          style={{ backgroundColor: "#F1F3F5" }}
          mt="6em"
          w="60%"
          ml="15em"
        >
          <form
            onSubmit={form.onSubmit((values) => onSubmit(values))}
            encType="multipart/form-data"
          >
            <h3 align="left" fw="md" fz="xs">
              {mode === "edit" ? "Document Edit" : "Document Add"}
            </h3>
            <Grid>
              <Grid.Col span={6}>
                <div className={classes.wrapper}>
                  <Dropzone
                    openRef={openRef}
                    onDrop={(e) => fileupload(e)}
                    className={classes.dropzone}
                    // radius="md"
                    mt="2rem"
                    // h="10rem"

                    required
                    {...form.getInputProps("file")}
                  >
                    <div style={{ pointerEvents: "none" }}>
                      <Group position="center">
                        {imageUrl || document.document.data?.[0]?.file ? (
                          // eslint-disable-next-line jsx-a11y/img-redundant-alt
                          <img
                            src={imageUrl || document.document.data?.[0]?.file}
                            href={imageUrl || document.document.data?.[0]?.file}
                            alt="Uploaded Image Preview"
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        ) : (
                          <Dropzone.Idle>
                            <IconCloudUpload
                              size={rem(50)}
                              color={
                                theme.colorScheme === "dark"
                                  ? theme.colors.dark[0]
                                  : theme.black
                              }
                              stroke={1.5}
                            />
                          </Dropzone.Idle>
                        )}
                      </Group>

                      <Text ta="center" fw={700} fz="lg" mt="sm">
                        <Dropzone.Idle>Upload Document</Dropzone.Idle>
                      </Text>
                    </div>
                  </Dropzone>

                  <Button
                    // align="right"
                    // variant="gradient"
                    // gradient={{ from: "teal", to: "lime", deg: 105 }}
                    className={classes.control}
                    size="sm"
                    radius="md"
                    onClick={(e) => {
                      openRef.current?.();
                      fileupload(e);
                    }}
                  >
                    Select files
                  </Button>
                </div>
              </Grid.Col>
              <Grid.Col span={6}>
                {" "}
                <TextInput
                  label="Name"
                  mt="sm"
                  w="100%"
                  placeholder="Enter Name"
                  required
                  labelProps={{ display: "flex" }}
                  color="#DEE2E6"
                  value={form.values.name}
                  onChange={(e) =>
                    form.setValues({ ...form.values, name: e.target.value })
                  }
                />
                <Select
                  placeholder="Pick"
                  label="Client"
                  data={data}
                  value={form.values.client_id}
                  onChange={handleSelectChange}
                  nothingFound="No options"
                  w="100%"
                  mt="sm"
                  labelProps={{ display: "flex" }}
                  required
                  dropdownPosition="bottom"
                  color="#DEE2E6"
                  {...form.getInputProps("client_id")}
                />
                <MultiSelect
                  label="User"
                  placeholder="Pick"
                  searchable
                  nothingFound="No options"
                  data={Edata}
                  onChange={handleSelectUserChange}
                  value={form.values.user_id}
                  w="100%"
                  color="#DEE2E6"
                  mt="sm"
                  labelProps={{ display: "flex" }}
                  required
                  dropdownPosition="bottom"
                  {...form.getInputProps("user_id")}
                />
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={6}>
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
                  onClick={() => navigate("/home/document")}
                >
                  {" "}
                  Back
                </Button>
              </Grid.Col>
              <Grid.Col span={6}>
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
                  {mode === "add" ? "Add " : "Update"}
                </Button>
              </Grid.Col>
            </Grid>
          </form>
        </Paper>
      </ScrollArea>
    </div>
  );
}
