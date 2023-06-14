/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createStyles,
  Navbar,
  Group,
  getStylesRef,
  rem,
  Heading,
  Avatar,
  SimpleGrid,
  Title,
  Text
} from "@mantine/core";
import {
  IconSettings,
  IconLogout,
  IconUser,
  IconCalendarEvent,
  IconFileText,
  IconUserCircle,
  IconChecklist,
  IconHome,
} from "@tabler/icons-react";
import {
  getEmployee,
} from "../redux/action/employee.action.js";
import {Logout} from "../redux/action/login.action.js"
import "../assets/MyBackground.css";
const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.sm,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  section: {
    borderBottom: "0.0625rem solid #e9ecef", // Customize the border style, color, and size as needed
    paddingBottom: "0.5rem", // Adjust the padding bottom value as needed
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },
}));

export function NavbarCom() {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
    const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.clear();
    console.log("mesh")
    navigate("/login");
  };
   useEffect(() => {
     dispatch(getEmployee());
   }, []);
   
    const employee = useSelector((state) => state.employeeData);
    const Myrole = employee.mydata?.data?.[0].role?.[0].name;
    const firm_name = employee.mydata?.data?.[0].firm?.[0].firm_name
    const capitalizedFirmName = firm_name ? firm_name.toUpperCase() : "";
    const captilizedRole = Myrole ? Myrole.toUpperCase() : ""
    
    return (
      <div>
        <Navbar height={790} width={{ sm: 270 }} p="md">
          <Navbar.Section>
            <Group className={classes.header} position="apart">
              {/* <MantineLogo size={28} /> */}
              <h1 fz="3rem" className="gradiant" mt="1rem" fw={900}>
                Financial ERP
              </h1>

              {/* <Code sx={{ fontWeight: 700 }}>v3.1.2</Code> */}
            </Group>
          </Navbar.Section>
          <Navbar.Section mt="1rem" className={classes.section}>
            <SimpleGrid cols={2} spacing={2} verticalSpacing="xs">
              <div>
                {" "}
                <Avatar
                  component="a"
                  target="_blank"
                  alt="it's me"
                  size={50}
                  radius={40}
                  href={employee.mydata?.data?.[0]?.profile_image}
                  src={employee.mydata?.data?.[0]?.profile_image}
                  ml="1rem"
                />
              </div>
              <div>
                <Text fz="1.2rem" fw={700} className="gradiant">
                  {capitalizedFirmName}
                </Text>
                <Text fz={12} className="gradiant" fw={500}>
                  {captilizedRole}
                </Text>
              </div>
            </SimpleGrid>
          </Navbar.Section>
          <Navbar.Section>
            <a className={cx(classes.link)} href="/home">
              <IconHome className={classes.linkIcon} stroke={1.5} />
              <span>Home</span>
            </a>
            <a className={cx(classes.link)} href="/home/client">
              <IconUser className={classes.linkIcon} stroke={1.5} />
              <span>Client</span>
            </a>
            <a className={cx(classes.link)} href="/home/event">
              <IconCalendarEvent className={classes.linkIcon} stroke={1.5} />
              <span>Event</span>
            </a>
            <a className={cx(classes.link)} href="/home/document">
              <IconFileText className={classes.linkIcon} stroke={1.5} />
              <span>Document</span>
            </a>
            {role === "admin" && (
              <a className={cx(classes.link)} href="/home/employee">
                <IconUserCircle className={classes.linkIcon} stroke={1.5} />
                <span>User</span>
              </a>
            )}

            <a className={cx(classes.link)} href="/home/task">
              <IconChecklist className={classes.linkIcon} stroke={1.5} />
              <span>Task</span>
            </a>
            <a className={cx(classes.link)} href="/home/setting">
              <IconSettings className={classes.linkIcon} stroke={1.5} />
              <span>Setting</span>
            </a>
          </Navbar.Section>
          <Navbar.Section grow>
            <a
              href="/"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            ></a>
          </Navbar.Section>
          <Navbar.Section className={classes.footer}>
            <div style={{ marginRight: "4rem" }} onClick={handleLogOut}>
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span>Logout</span>
            </div>
          </Navbar.Section>
        </Navbar>
      </div>
    );
}
