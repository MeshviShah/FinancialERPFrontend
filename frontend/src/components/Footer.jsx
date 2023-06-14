import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  rem,
  ThemeIcon,
  Grid,
  Title,
  Button,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
const backgroundImageUrl =
  "https://neaxr.itech-theme.com/static/media/bgshape1.7aade7aa.png";
const useStyles = createStyles((theme) => ({
  backgroundImage: {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "40vh",
    zIndex: 1,
    opacity: 0.9,
  },
}));



export function Footer() {
   const navigate = useNavigate();
    const contactSubmit = () => {
      navigate("/contact");
    };
      const { classes, theme } = useStyles();
    return (
      <div className={classes.backgroundImage}>
        <Grid ml={650} mr={650}>
          <Grid.Col span={3}>
            {" "}
            <ThemeIcon
              size="xl"
              radius="md"
              variant="gradient"
              gradient={{ deg: 0, from: "indigo", to: "black" }}
              mb="sm"
              mt={70}
            >
              <IconBrandInstagram size={28} stroke={1.5} />
            </ThemeIcon>
          </Grid.Col>
          <Grid.Col span={3}>
            {" "}
            <ThemeIcon
              size="xl"
              radius="md"
              variant="gradient"
              gradient={{ deg: 0, from: "indigo", to: "black" }}
              mb="sm"
              mt={70}
            >
              <IconBrandTwitter size={28} stroke={1.5} />
            </ThemeIcon>
          </Grid.Col>
          <Grid.Col span={3}>
            {" "}
            <ThemeIcon
              size="xl"
              radius="md"
              variant="gradient"
              gradient={{ deg: 0, from: "indigo", to: "black" }}
              mb="sm"
              mt={70}
            >
              <IconBrandFacebook size={28} stroke={1.5} />
            </ThemeIcon>
          </Grid.Col>
          <Grid.Col span={3}>
            {" "}
            <ThemeIcon
              size="xl"
              radius="md"
              variant="gradient"
              gradient={{ deg: 0, from: "indigo", to: "black" }}
              mb="sm"
              mt={70}
            >
              <IconBrandLinkedin size={28} stroke={1.5} />
            </ThemeIcon>
          </Grid.Col>
        </Grid>
        <Button
          variant="gradient"
          //gradient={{ from: "teal", to: "lime", deg: 105 }}
          align="center"
          w={190}
          mt="sm"
          size="lg"
          radius="md"
          color="#0dc181"
          onClick={contactSubmit}
        >
          Contact Us
        </Button>
      </div>
    );
  
}
