import react from "react";
import { HeaderPage } from "../components/Header";
import {
  Header,
  Title,
  createStyles,
  Text,
  Container,
  Grid,
  Button,
} from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import "../assets/MyBackground.css";
import { FeaturesCard } from "../components/Features";
import { WhyusSection } from "../components/WhyusSection";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
const backgroundImageUrl =
  "https://neaxr.itech-theme.com/static/media/bgshape1.7aade7aa.png"; // URL of your background image
const homeImageUrl =
  "https://neaxr.itech-theme.com/static/media/shape1.ab6874c7.png";
const useStyles = createStyles((theme) => ({
  backgroundImage: {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "150vh",
    zIndex: 1,
    opacity: 0.9,
  },
}));
export function WelcomePage() {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/login");
   
  };
   const contactSubmit = () => {
     navigate("/contact");
   };
  const { classes, theme } = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <HeaderPage />

      <Grid grow>
        <Grid.Col span={4}>
          {" "}
          <Title className="gradiant" fw="30em" align="left" mt={130} ml={50}>
            {" "}
            Maximize Your Firm's Financial <br />
            Potential with Our <br />
            Application <br></br>
          </Title>
          <Button
            variant="gradient"
            //gradient={{ from: "teal", to: "lime", deg: 105 }}
            align="left"
            w={190}
            mt="lg"
            mr="27em"
            size="lg"
            radius="md"
            color="#0dc181"
            onClick={contactSubmit}
          >
            Contact Us
          </Button>
        </Grid.Col>
        <Grid.Col span={4}>
          {" "}
          <img width="100%" src={homeImageUrl} alt="" />
        </Grid.Col>
      </Grid>
      <Title mt="3em" fz={50} fw={700}>
        Features
      </Title>
      <FeaturesCard />
      <Title mt="2.7em" fz={40} fw={500}>
        Manage your client,your Way
      </Title>
      <Button
        variant="gradient"
        color="#0dc181"
        radius="lg"
        w={180}
        size="md"
        mt={40}
        rightIcon={<IconArrowNarrowRight />}
        onClick={submit}
      >
        Get Start
      </Button>
      <Title mt="2em" fz={50} fw={500}>
        Why us?
      </Title>

      <WhyusSection />
      <Footer />
    </div>
  );
}

//   style={{
//     backgroundImage: `url(${backgroundImageUrl})`, // Set the backgroundImage property with the URL
//     backgroundSize: 'cover', // Optional: Set the background size to cover or contain
//     backgroundRepeat: 'no-repeat', // Optional: Set the background repeat behavior
//     backgroundPosition: 'center center', // Optional: Set the background position
//     minHeight: '120vh', // Optional: Set a minimum height for the element
//     display: 'flex', // Optional: Set the display property for child elements
//     //justifyContent: 'center', // Optional: Set the horizontal alignment of child elements
//    // alignItems: 'center', // Optional: Set the vertical alignment of child elements
//   }}
