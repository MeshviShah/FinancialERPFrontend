import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
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
  Image,
} from "@mantine/core";
import { IconCamera } from "@tabler/icons-react";
import { useForm, isEmail } from "@mantine/form";
import { ChangePassword } from "./ChangePassword";
import { imageUpload } from "../redux/action/imageUpload.action";
import { notifications } from "@mantine/notifications";
import {
  getEmployee,
  updateEmployee,
} from "../redux/action/employee.action.js";
export function Setting() {
   const [imageUrl, setImageUrl] = useState(null);
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employeeData);
  
   const { image } = useSelector((state) => state.image);
  console.log( employee.mydata?.data,"j")
   useEffect(() => {
     dispatch(getEmployee());
   }, [dispatch]);
   
   const form = useForm({
     initialValues: {
       name: "",
       email: "",
       phone: "",
       profile_image: "",
       department: "",
     },
     validate: {
       email: isEmail("Invalid email"),
       
       //   value.length < 3 ? "Password must have at least 3 letters" : null,
     },
   });
   useEffect(() => {
     if (employee.mydata?.data?.length > 0) {
       const firstEmployee = employee.mydata.data[0];
      
       form.setValues({
         name: firstEmployee.name || "",
         email: firstEmployee.email || "",
         phone: firstEmployee.phone || "",
         profile_image: firstEmployee.profile_image || "",
         department: firstEmployee.department || "",
         password: firstEmployee.password || "",
       });
     }
   }, [employee]);
    const onSubmit = async (values) => {
      
      if (
        values.phone &&
        (!/^\d+$/.test(values.phone) || values.phone.trim().length !== 10)
      ) {
        form.setErrors({ phone: "Invalid phone number" });
        return;
      }
      
    
        await dispatch(
          updateEmployee(employee?.mydata?.data?.[0]?._id, {
            ...values,
            profile_image: image?.data?.filename,
          })
        ).then(() => {
          form.reset();
           notifications.show({
             title: "Success",
             message: "Successfully Updated Your Profile",
             autoClose: 8000,
           });
        });
      
    };
     const fileupload = async (e) => {
       const file = e.target.files[0];
       const url = URL.createObjectURL(file);
       setImageUrl(url);
       const formData = new FormData();
       formData.append("file", file);
       console.log(formData, "meshvishah");
       dispatch(imageUpload(formData));
     };
  return (
    <Container my={40}>
      <Title
        align="left"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 500,
        })}
      >
        Account Setting
      </Title>
      <h3 align="left" fw="md" fz="xs" color="#94D82D">
        Edit Profile
      </h3>
      <Paper
        shadow="sm"
        radius="md"
        p="sm"
        mt="sm"
        w={680}
        style={{ backgroundColor: "#F1F3F5" }}
        // ml="8em"
      >
        <form
          onSubmit={form.onSubmit((values) => onSubmit(values))}
          encType="multipart/form-data"
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <Avatar
              component="a"
              href={imageUrl || employee.mydata.data?.[0].profile_image}
              target="_blank"
              src={imageUrl || employee.mydata.data?.[0].profile_image}
              alt="it's me"
              radius="5em"
              size="7em"
              style={{ border: "6px solid #CED4DA" }}
            />
            <div
              style={{
                position: "absolute",
                top: "90%",
                left: "12%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#CED4DA",
                borderRadius: "50%",
                cursor: "pointer",
                padding: "0.3rem",
                //border: "2px solid #CED4DA",
              }}
              onClick={() => {
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.accept = "image/*";
                fileInput.onchange = fileupload;
                fileInput.click();
              }}
            >
              <IconCamera size="1.1rem" />
            </div>
          </div>

          <TextInput
            label="Name"
            mt="sm"
            placeholder="Enter Name"
            required
            labelProps={{ display: "flex" }}
            color="#DEE2E6"
            value={form.values.name}
            onChange={(e) =>
              form.setValues({ ...form.values, name: e.target.value })
            }
          />
          <TextInput
            label="Email"
            mt="sm"
            placeholder="you@google.com"
            required
            labelProps={{ display: "flex" }}
            color="#DEE2E6"
            value={form.values.email}
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
            onChange={(e) =>
              form.setValues({ ...form.values, phone: e.target.value })
            }
            {...form.getInputProps("phone")}
          />
          <TextInput
            label="Department"
            mt="sm"
            placeholder="Enter Gst_Number"
            required
            labelProps={{ display: "flex" }}
            color="#DEE2E6"
            value={form.values.department}
            onChange={(e) =>
              form.setValues({ ...form.values, department: e.target.value })
            }
          />

          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            fullWidth
            mt="xl"
            w="30%"
            radius="md"
            type="submit"
          >
            Update
          </Button>
        </form>
      </Paper>
      <ChangePassword />
    </Container>
  );
}
