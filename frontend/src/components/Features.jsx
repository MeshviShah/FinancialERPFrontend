import {
  createStyles,
  Paper,
  Text,
  ThemeIcon,
  rem,
  SimpleGrid,
  Grid,
} from "@mantine/core";
import {
  IconFileText,
  IconColorSwatch,
  IconChecklist,
  IconBellRingingFilled,
  IconMail,
  IconUsers,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 250ms ease, box-shadow 200ms ease",
    padding: theme.spacing.xl,
    // paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    marginBottom: "1rem",
    height: "22em",
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
      width: rem(5),
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.indigo[5],
        theme.colors.blue[3]
      ),
    },
  },
}));

const data = [
  {
    description:
      "Keep track of payments and receive notifications when payments are due or received. Our application allows you to send automated payment reminders to clients, reducing delays and improving cash flow.",
    label: "Payment Notifications",
    icon: IconBellRingingFilled,
  },
  {
    description:
      "Our application allows you to create, assign, and track tasks for your team, streamlining workflow and ensuring nothing falls through the cracks. You can set deadlines, add comments, and prioritize tasks to keep everyone on the same page",
    label: "Task Management",
    icon: IconChecklist,
  },
  {
    description:
      " Our application provides a secure and organized way to manage client documents. Upload, store, and access important documents such as financial statements, tax returns, and other files securely.",
    label: "Client Document Management",
    icon: IconFileText,
  },
  {
    description:
      "Communicate with clients and team members effortlessly with our application's auto-generated email feature. You can set up templates for common emails and automate communication, saving time and ensuring consistency in your messaging.",
    label: "Auto-Generated Email",
    icon: IconMail,
  },
  {
    description:
      "Easily manage your team with our application's employee management features. Assign tasks to specific employees, track their progress, and monitor their performance, all in one centralized system",
    label: "Employee Management",
    icon: IconUsers,
  },
];


export function FeaturesCard() {
  const { classes } = useStyles();
  
//    const links = data.map((item) => (
    
//      <Paper
//        withBorder
//        radius="md"
//        className={classes.card}
//        w="20%"
//        ml={200}
//        mt="lg"
//        mb="lg"
//      >
//        {" "}
//        <ThemeIcon
//          size="xl"
//          radius="md"
//          variant="gradient"
//          gradient={{ deg: 0, from: "indigo", to: "blue" }}
//        >
//          <item.icon size={rem(28)} stroke={1.5} />
//        </ThemeIcon>
//        <Text size="xl" weight={500} mt="md">
//          <p>{item.label}</p>
//        </Text>
//        <Text size="sm" mt="sm" color="dimmed">
//          <p>{item.description}</p>
//        </Text>
//      </Paper>
//    ));
//   return (
//     <>
//     {links}
//     </>
     
       
       
      
        const links = data.map((item) => (
          <Grid.Col span={4} >
            <Paper
              withBorder
              radius="md"
              className={classes.card}
              style={{
                width: "80%",
                
                marginTop: "1rem",
              }}
            >
              <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: "indigo", to: "black" }}
              >
                <item.icon size={28} stroke={1.5} />
              </ThemeIcon>
              <Text size="xl" weight={500} mt="md">
                {item.label}
              </Text>
              <Text size="sm" mt="sm" color="dimmed" ta="center">
                {item.description}
              </Text>
            </Paper>
          </Grid.Col>
        ));

  return (
    <Grid mt={60} ml={100} mr={40} mb={40} gutter="xs">
      {links} {/* Render first 3 items in first row */}
    </Grid>
  );
};
   
 

