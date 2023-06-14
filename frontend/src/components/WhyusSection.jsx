import {
  Grid,
  Group,
  Text,
  Title,
  createStyles,
  ThemeIcon,
} from "@mantine/core";
import {
  IconHourglassEmpty,
  IconShieldHalfFilled,
  IconCoin,
  IconBrandHipchat,
} from "@tabler/icons-react";
const backgroundImageUrl =
  "https://neaxr.itech-theme.com/static/media/bgshape1.7aade7aa.png"; 
const useStyles = createStyles((theme) => ({
  backgroundImage: {
    //backgroundImage: `url(${backgroundImageUrl})`,
    backgroundColor: "#EDF2FF",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "35vh",
    zIndex: 1,
  },
}));
  export function WhyusSection() {
 const { classes, theme } = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <Grid mt={40} ml={130} mr={130} gutter="xl" mb={0.005}>
        <Grid.Col md={6} lg={3} mt={60}>
          <ThemeIcon
            size="xl"
            radius="md"
            variant="gradient"
            gradient={{ deg: 0, from: "indigo", to: "black" }}
            style={{ display: "flex" }}
            mb="sm"
          >
            <IconHourglassEmpty size={28} stroke={1.5} />
          </ThemeIcon>
          <Title ta="left" fw={600} fz={25} mb={30}>
            Time-Saving
          </Title>
          <Text ta="left" color="#495057">
            {" "}
            Automating tasks and processes with our application can save you
            time, allowing you to focus on more important aspects of your
            business
          </Text>
        </Grid.Col>
        <Grid.Col md={6} lg={3} mt={60}>
          <ThemeIcon
            size="xl"
            radius="md"
            variant="gradient"
            gradient={{ deg: 0, from: "indigo", to: "black" }}
            style={{ display: "flex" }}
            mb="sm"
          >
            <IconShieldHalfFilled size={28} stroke={1.5} />
          </ThemeIcon>
          <Title ta="left" fw={600} fz={25} mb={30}>
            Secure and Reliable
          </Title>
          <Text ta="left" color="#495057">
            {" "}
            We prioritize the security and reliability of our application,
            ensuring your data is protected and available whenever you need it.
          </Text>
        </Grid.Col>
        <Grid.Col md={6} lg={3} mt={60}>
          <ThemeIcon
            size="xl"
            radius="md"
            variant="gradient"
            gradient={{ deg: 0, from: "indigo", to: "black" }}
            style={{ display: "flex" }}
            mb="sm"
          >
            <IconCoin size={28} stroke={1.5} />
          </ThemeIcon>
          <Title ta="left" fw={600} fz={25} mb={30}>
            Payment
          </Title>
          <Text ta="left" color="#495057">
            {" "}
            Our application allows you to send automated payment reminders to
            clients, reducing delays and improving cash flow
          </Text>
        </Grid.Col>
        <Grid.Col md={6} lg={3} mt={60}>
          <ThemeIcon
            size="xl"
            radius="md"
            variant="gradient"
            gradient={{ deg: 0, from: "indigo", to: "black" }}
            style={{ display: "flex" }}
            mb="sm"
          >
            <IconBrandHipchat  size={28} stroke={1.5} />
          </ThemeIcon>
          <Title ta="left" fw={600} fz={25} mb={30}>
            Enhanced Collaboration
          </Title>
          <Text ta="left" color="#495057">
            {" "}
            Our application promotes collaboration among team members, making it
            easy to assign tasks, share documents, and communicate effectively.
          </Text>
        </Grid.Col>
      </Grid>
    </div>
  ); 
}
