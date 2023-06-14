import {
  createStyles,
  Paper,
  Text,
  ThemeIcon,
  rem,
  SimpleGrid,
  Grid,
  Title,
  TextInput,
  Button,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { HeaderPage } from "./Header";
import { Footer } from "./Footer";
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
    overflow: "hidden",
    transition: "transform 250ms ease, box-shadow 200ms ease",
   backgroundColor: "#EDF2FF",
    padding: theme.spacing.xl,
    // paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    marginBottom: "1rem",
    height: "30em",
    "&:hover": {
      boxShadow: theme.shadows.lg,
      transform: "scale(1.03)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(1),
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.indigo[5],
        theme.colors.blue[3]
      ),
    },
  },
}));


export function ContactUS() {
  const { classes } = useStyles()
  return (
    <div className={classes.backgroundImage}>
      <HeaderPage />
      <Grid grow>
        <Grid.Col span={6}>
          {" "}
          <Paper
            withBorder
            radius="md"
            className={classes.card}
            h={570}
            style={{
              width: "70%",
              marginLeft: "5em",
              marginTop: "4em",
            }}
          >
            <Title>Contact US</Title>
            <TextInput
              label="Name"
              mt="sm"
              placeholder=" Name"
              required
              labelProps={{ display: "flex" }}
              variant="filled"
              // value={formData.name}
              // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <TextInput
              label="Email"
              mt="sm"
              placeholder="Enter Email"
              required
              labelProps={{ display: "flex" }}
              variant="filled"
              
              // value={formData.name}
              // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <TextInput
              label="Phone"
              mt="sm"
              placeholder=" Phone Number"
              labelProps={{ display: "flex" }}
              variant="filled"
              // value={formData.name}
              // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <TextInput
              label="Firm Name"
              mt="sm"
              placeholder="Firm Name"
              labelProps={{ display: "flex" }}
              variant="filled"
              // value={formData.name}
              // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <TextInput
              label="Anything Else?"
              mt="sm"
              placeholder="How are you looking to use application"
              labelProps={{ display: "flex" }}
              variant="filled"
              // value={formData.name}
              // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Button w="50%" mt={25} radius="xl" type="submit">
              Contact Us
            </Button>
          </Paper>
        </Grid.Col>
        <Grid.Col span={6} mt="4em">
          <Title fw="800" fz={45}>
            CONTACT OUR TEAM
          </Title>
          <div>
            <Text mt={40} ta="left" ml={160} fz="1.3em" fw={500} mr={100}>
              (1)Let’s explore how Application can work for you.
            </Text>{" "}
            <Text mt={10} ta="left" ml={160} mr={100} fz="1.3em" fw={500}>
              (2)flexible tool for your entire company to Manage Employee
              Task,Payment Auto Generated Email,Tender details and many more.
            </Text>{" "}
            <Text mt={10} ta="left" ml={160} fz="1.3em" fw={500} mr={100}>
              (3)securely manage Client Documents .
            </Text>
            <Text mt={10} ta="left" ml={160} mr={100} fz="1.3em" fw={500}>
              (4) Dedicated support to work with you on your setup and help you
              build the Stressless Enviorment for your company.
            </Text>
          </div>
        </Grid.Col>
      </Grid>
      <Footer />
    </div>
  );
}
