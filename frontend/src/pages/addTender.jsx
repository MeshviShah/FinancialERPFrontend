import {
  createStyles,
  Paper,
  rem,
  Title,
  TextInput,
  Button,
  Grid,
  FileInput
} from "@mantine/core";
import { HeaderPage } from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { useForm, isNotEmpty } from "@mantine/form";
import { addTender } from "../redux/action/tender.action";
import { tenderFile } from "../redux/action/imageUpload.action";
import { useEffect } from "react";
const backgroundImageUrl =
  "https://neaxr.itech-theme.com/static/media/bgshape1.7aade7aa.png";
const useStyles = createStyles((theme) => ({
  backgroundImage: {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    zIndex: 1,
    opacity: 0.9,
  },
  card: {
    position: "relative",
    cursor: "pointer",
    backgroundColor: "#EDF2FF",
    padding: theme.spacing.xl,
    // paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    marginBottom: "1rem",
    height: "30em",

  },
}));

export function AddTender() {
  const { classes } = useStyles();
  const dispatch = useDispatch();
   const { image } = useSelector((state) => state.image);
   useEffect(()=> {

   },[])
   const form = useForm({
     initialValues: {
       industry: "",
       city: "",
       address: "",
       country: "",
       state: "",
       email: "",
       description:"",
       file:"",
       value:"",
       
       
     },
   
   });
  //  const fileupload = async (e) => {
  //    const file = e;
  //    //const allowedFormats = ["image/png", "image/jpeg"];
  //     console.log(e)  
  //        const formData = new FormData();
  //        formData.append("file", file);
  //        dispatch(tenderFile(formData));
     
  //     // else {
  //     //    notifications.show({
  //     //      title: "Error",
  //     //      message: "Only PNG and JPEG formats are allowed.",
  //     //      autoClose: 8000,
  //     //    });
  //     //  }
  //    }
   
     const onSubmit = async (values) => {
      
          dispatch(
            addTender(values)
          ).then(() => {
            form.reset();
          });
       }
    
  return (
    <div className={classes.backgroundImage}>
      <HeaderPage />{" "}
      <Paper
        withBorder
        radius="md"
        className={classes.card}
        h={570}
        style={{
          width: "50%",
          height: "60%",
          marginLeft: "25em",
          marginTop: "4em",
        }}
      >
        <Title>ADD TENDER</Title>
        <form
          onSubmit={form.onSubmit((values) => onSubmit(values))}
          encType="multipart/form-data"
        >
          <TextInput
            label="Email"
            mt="sm"
            w="100%"
            placeholder="Enter Email"
            labelProps={{ display: "flex" }}
            color="#DEE2E6"
            value={form.values.email}
            onChange={(e) =>
              form.setValues({ ...form.values, email: e.target.value })
            }
          />
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label="Industry"
                mt="sm"
                w="100%"
                placeholder="Enter Indsutry Name"
                required
                labelProps={{ display: "flex" }}
                color="#DEE2E6"
                value={form.values.industry}
                onChange={(e) =>
                  form.setValues({ ...form.values, industry: e.target.value })
                }
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="City"
                mt="sm"
                w="100%"
                placeholder="Enter City Name"
                required
                labelProps={{ display: "flex" }}
                color="#DEE2E6"
                value={form.values.city}
                onChange={(e) =>
                  form.setValues({ ...form.values, city: e.target.value })
                }
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label="State"
                mt="sm"
                w="100%"
                placeholder="Enter State Name"
                required
                labelProps={{ display: "flex" }}
                color="#DEE2E6"
                value={form.values.state}
                onChange={(e) =>
                  form.setValues({ ...form.values, state: e.target.value })
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <div>
                <TextInput
                  label="Country"
                  mt="sm"
                  w="100%"
                  placeholder="Enter Country Name"
                  required
                  labelProps={{ display: "flex" }}
                  color="#DEE2E6"
                  value={form.values.country}
                  onChange={(e) =>
                    form.setValues({ ...form.values, country: e.target.value })
                  }
                />
              </div>
            </Grid.Col>
          </Grid>
          <TextInput
            label="Address"
            mt="sm"
            w="100%"
            placeholder="Enter Address"
            required
            labelProps={{ display: "flex" }}
            color="#DEE2E6"
            value={form.values.address}
            onChange={(e) =>
              form.setValues({ ...form.values, address: e.target.value })
            }
          />
         
          <TextInput
            label="File"
            mt="sm"
            w="100%"
            placeholder="Enter File"
            labelProps={{ display: "flex" }}
            color="#DEE2E6"
            value={form.values.file}
            onChange={(e) =>
              form.setValues({ ...form.values, file: e.target.value })
            }
          />
          <TextInput
            label="Description"
            mt="sm"
            w="100%"
            placeholder="Enter Email"
            labelProps={{ display: "flex" }}
            color="#DEE2E6"
            value={form.values.description}
            onChange={(e) =>
              form.setValues({ ...form.values, description: e.target.value })
            }
          />
          <Button w="50%" mt={25} radius="xl" type="submit">
            Add Tender
          </Button>
        </form>
      </Paper>
      <Footer />
    </div>
  );
}
